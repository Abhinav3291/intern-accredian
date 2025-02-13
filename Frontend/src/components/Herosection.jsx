import  { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import axios from "axios";

const Herosection = () => {
  const [open, setOpen] = useState(false);
  const [referrer, setReferrer] = useState({ name: "", email: "", phone: "" });
  const [referee, setReferee] = useState({ name: "", email: "", phone: "" });
  

  const handleClose = () => setOpen(false);

  const handleReferrerChange = (event) => {
    setReferrer({ ...referrer, [event.target.name]: event.target.value });
  };

  const handleRefereeChange = (event) => {
    setReferee({ ...referee, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!referrer.name || !referrer.email || !referrer.phone || !referee.name || !referee.email || !referee.phone) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("https://intern-accredian-server.vercel.app/api/referrals", { referrer, referee });
      console.log("Referral submitted successfully:", response.data);
      handleClose();
      setReferrer({ name: "", email: "", phone: "" });
      setReferee({ name: "", email: "", phone: "" });
      alert("Referral submitted successfully!");
    } catch (error) {
      console.error("Error submitting referral:", error);
      let errorMessage = "An error occurred while submitting the referral.";

      if (error.response && error.response.data && error.response.data.errors) {
        // Handle backend validation errors if present.  Customize as needed.
        errorMessage = error.response.data.errors.map(err => err.msg).join('\n'); // Join error messages
      } else if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message; // Use message from backend if available
      }
      alert(errorMessage);
    }
  };



  return (
    <div className="bg-gray-100 min-h-screen">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Refer a Friend</DialogTitle>
        <DialogContent>
          <TextField
            label="Your Name"
            name="name"
            value={referrer.name}
            onChange={handleReferrerChange}
            fullWidth
            required
            className="mt-2"
          />
          <TextField
            label="Your Email"
            name="email"
            value={referrer.email}
            onChange={handleReferrerChange}
            fullWidth
            required
            type="email"
            className="mt-2"
          />
          <TextField
            label="Your Phone"
            name="phone"
            value={referrer.phone}
            onChange={handleReferrerChange}
            fullWidth
            type="tel" // For phone number input
            className="mt-2"
          />

          <TextField
            label="Friend's Name"
            name="name"
            value={referee.name}
            onChange={handleRefereeChange}
            fullWidth
            required
            className="mt-2"
          />
          <TextField
            label="Friend's Email"
            name="email"
            value={referee.email}
            onChange={handleRefereeChange}
            fullWidth
            required
            type="email"
            className="mt-2"
          />
           <TextField
            label="Friend's Phone"
            name="phone"
            value={referee.phone}
            onChange={handleRefereeChange}
            fullWidth
            type="tel"
            className="mt-2"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <section className="hero" style={{ 
      backgroundColor: '#f0f0f0', // Example light gray background
      padding: '20px',
      textAlign: 'center' ,
      display : 'flex' ,
      flexDirection : 'row',
      margin: '20px',
      borderRadius: '50%'
    }}>
      <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}> {/* Center content */}

       
      </div>
      <div>
      <div className="hero-image" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}> {/* Center the image */}
        <img src="/Group 22035.png" alt="Hero" style={{ maxWidth: '100%' }} /> {/* Make image responsive */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' , padding: '20px' }}> {/* Center buttons */}
          <button onClick={() => setOpen(true)} style={{ 
            backgroundColor: '#007bff', // Example blue color
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Refer Now</button>

          <button style={{
            backgroundColor: 'transparent',
            color: '#007bff',
            padding: '10px 20px',
            border: '1px solid #007bff',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Talk to Expert</button>
        </div>
        </div>
      {/* Image Section */}
      <div className="hero-image" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}> {/* Center the image */}
        <img src="/Anniversary (7) 1.png" alt="Hero" style={{ maxWidth: '100%' }} /> {/* Make image responsive */}
      </div>
      
    </section>
    
    <div className="referral-steps" style={{
      backgroundColor: '#EEF5FF',
      padding: '40px',
      marginTop: '40px',
      borderRadius: '10%',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      
      <h2 className="referral-title" style={{
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333'
      }}>How Do I Refer?</h2> 
      <div className="step-container" style={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div className="step" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '25%'
        }}>
          <div className="step-icon" style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            color: '#333',
            fontSize: '2em'
          }}>
            <span className="material-symbols-outlined">
              <img src="/Layer_2_00000166652077678251612620000003541000192939887504_.png" alt="" />
            </span>
          </div>
          <p style={{
            fontSize: '1em',
            color: '#555',
            textAlign: 'center'
          }}>Submit referrals easily via our websites referral section.</p>
        </div>
        <div className="step" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '25%'
        }}>
          <div className="step-icon" style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            color: '#333',
            fontSize: '2em'
          }}>
            <span className="material-symbols-outlined">
              <img src="/Vector.png" alt="" />
            </span>
          </div>
          <p style={{
            fontSize: '1em',
            color: '#555',
            textAlign: 'center'
          }}>Earn rewards once your referral joins an Accredian program.</p>
        </div>
        <div className="step" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '25%'
        }}>
          <div className="step-icon" style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            color: '#333',
            fontSize: '2em'
          }}>
            <span className="material-symbols-outlined">
              <img src="/Group 22036.png" alt="" />
            </span>
            </div>
          <p style={{
            fontSize: '1em',
            color: '#555',
            textAlign: 'center'
          }}>Referrer receives a bonus 30 days after program enrollment.</p>
          
        </div>
      </div>
      
      <button className="refer-now-button" onClick={() => setOpen(true)} style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.1em'
      }}>Refer Now</button>
    </div>
    <p style={{
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center'
      }}>What Are The Referral Benefits?</p>
    </div>
  );
};

export default Herosection;