const express = require('express');
const { validationResult } = require('express-validator');

const router = express.Router();

router.post('/', async (req, res) => {
  // Validation result from the middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { referrer, referee } = req.body;

  try {
    // Create a new referral entry using Prisma
    const newReferral = await req.prisma.referral.create({
      data: {
        referrerName: referrer.name,
        referrerEmail: referrer.email,
        referrerPhone: referrer.phone,
        refereeName: referee.name,
        refereeEmail: referee.email,
        refereePhone: referee.phone,
      },
    });

    res.status(201).json(newReferral); // Return the created referral data
  } catch (error) {
    console.error('Error saving referral:', error);
    res.status(500).send('Error saving referral');
  }
});

module.exports = router;
