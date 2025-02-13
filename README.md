## Frontend (React)

The frontend is built using React.js and Material-UI for styling and components.  It provides a user-friendly interface for referring friends.

- **Key Features:**
    - Responsive design for various screen sizes.
    - Hero section with a "Refer Now" button.
    - Popup modal with a referral form.
    - Form validation for required fields.
    - Visually appealing and intuitive UI.

- **Components:**
    - `HeroSection`: Contains the hero content and the "Refer Now" button.
    - `ReferralLink`:  The popup modal containing the referral form.
    - `ReferralProgram`: The form for submitting referral information.

- **Styling:**
    - Material-UI is used for styling and pre-built components.

## Backend (Node.js/Express)

The backend is built using Node.js and Express.js. It handles API requests, interacts with the MySQL database using Prisma ORM, and sends email notifications.

- **Key Features:**
    - RESTful API endpoints for handling referral data.
    - MySQL database integration using Prisma ORM.
    - Data validation.
    - Error handling.
    - Email notifications via Google Mail Service API.

- **Routes:**
    - `/api/referrals`: Handles referral submissions.

- **Middleware:**
    - `body-parser`: Parses request bodies.
    - `cors`: Enables Cross-Origin Resource Sharing.
    - `express-validator`: Validates request data.
