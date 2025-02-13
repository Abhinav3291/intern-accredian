const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referrals');
const { PrismaClient } = require('@prisma/client');
const { body, validationResult } = require('express-validator'); // For validation

const app = express();

app.use(bodyParser.json());

const prisma = new PrismaClient();
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

// Validation middleware for the referral route
const validateReferral = [
  body('referrer.name').notEmpty().withMessage('Referrer name is required'),
  body('referrer.email').isEmail().withMessage('Referrer email is invalid'),
  body('referee.name').notEmpty().withMessage('Referee name is required'),
  body('referee.email').isEmail().withMessage('Referee email is invalid'),
  body('referrer.phone').notEmpty().withMessage('Referrer phone is required'),
  body('referee.phone').notEmpty().withMessage('Referee phone is required'),
  // Add more validation rules as needed (e.g., phone number format)
];

app.use('/api/referrals', validateReferral, referralRoutes); // Apply validation middleware

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Prisma disconnected');
  process.exit();
});

module.exports = app;
