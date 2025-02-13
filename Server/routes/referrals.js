const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator'); // Import validationResult

const { PrismaClient } = require('@prisma/client');
const sendMail = require('../service/mail.service');
const prisma = new PrismaClient();


router.post('/', async (req, res) => {
  const errors = validationResult(req); // Check for validation errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Respond with validation errors
  }

  try {
    const { referrer, referee } = req.body;

    console.log(referee, referrer);

    const referral = await req.prisma.referral.create({ // Use req.prisma
      data: {
        referrerName: referrer.name,
        referrerEmail: referrer.email,
        referrerPhone: referrer.phone,
        refereeName: referee.name,
        refereeEmail: referee.email,
        refereePhone: referee.phone,
      },
    });

    sendMail(referrer.email, `You have successfully referred ${referee.email}`, "You Referred Successfully");
    
    sendMail(referee.email, `You have successfully referred by ${referrer.email}`, "Referred Successfully");

    res.status(201).json({ message: 'Referral created successfully', referral });
  } catch (error) {
    console.error("Error saving referral:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



module.exports = router;