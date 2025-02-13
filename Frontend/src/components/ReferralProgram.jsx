import { useState } from 'react';

const ReferralProgram = () => {
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const programs = [
    {
      program: "Professional Certificate Program in Product Management",
      referrerBonus: "₹7,000",
      refereeBonus: "₹9,000",
    },
    {
      program: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹9,000",
      refereeBonus: "₹11,000",
    },
    {
      program: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹10,000",
      refereeBonus: "₹10,000",
    },
    {
      program: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹10,000",
      refereeBonus: "₹10,000",
    },
    {
      program: "Executive Program in Product Management",
      referrerBonus: "₹10,000",
      refereeBonus: "₹10,000",
    },
    {
      program: "Advanced Certification in Product Management",
      referrerBonus: "₹10,000",
      refereeBonus: "₹10,000",
    },
    {
      program: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹10,000",
      refereeBonus: "₹10,000",
    },
  ];

  const visiblePrograms = showAllPrograms ? programs : programs.slice(0, 3);

  return (
    <div>
      <div className="referral-program" style={{
        display: 'flex',
        width: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
        marginInline: '15% 15%'


      }}>
        <div className="program-menu" style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '10%',
          padding: '10px',
          width: '250px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          marginTop: '30px',
        }}>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1A73E8', borderRadius: '20%' }}> {/* Highlighted item */}
              <span style={{ color: '#333', fontWeight: 'bold', }}>ALL PROGRAMS</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>PRODUCT MANAGEMENT</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>STRATEGY & LEADERSHIP</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>BUSINESS MANAGEMENT</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>FINTECH</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>SENIOR MANAGEMENT</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>DATA SCIENCE</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>DIGITAL TRANSFORMATION</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
            <li style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#333' }}>BUSINESS ANALYTICS</span>
              <span style={{ color: '#888', fontSize: '0.8em' }}>&gt;</span>
            </li>
          </ul>
        </div>

        <div className="program-table" style={{
          flex: 1,
          border: '1px solid #ccc',
          borderRadius: '10%',
          marginLeft: '20px',
          padding: '10px',
          overflowX: 'auto', // Add horizontal scroll if needed
          marginTop: '30px'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '5%' }}>
            <thead>
              <tr style={{ backgroundColor: '#1A73E8' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Programs</th>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'right' }}>Referrer Bonus</th>
                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'right' }}>Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {visiblePrograms.map((p, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '5px' }}>🎓</span> {/* Add icon here */}
                      {p.program}
                    </span>
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'right' }}>{p.referrerBonus}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'right' }}>{p.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!showAllPrograms && (
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button onClick={() => setShowAllPrograms(true)} style={{
                backgroundColor: 'transparent',
                color: '#337ab7',
                border: 'none',
                cursor: 'pointer',
                padding: '5px 10px'
              }}>Show More</button>
            </div>
          )}
        </div>
      </div>
      <div className="faq-section" style={{

        width: '100%',
        maxWidth: '1166px', // Set a maximum width for the section
        margin: '10% auto',   // Center the section horizontally
        padding: '20px',
        border: '1px solid #ccc', // Optional border
        borderRadius: '8px', // Optional border radius

      }}>
        <div className='section-faq' style={{ display: 'flex', flexDirection: 'row' }}>
          <div className='faq-main' style={{ padding: '20px' }}>
            <p style={{ width: '259px', height: '50px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', textAlign: 'center', color: '#007bff' }}>Eligibility</p>
            <p style={{ width: '259px', height: '50px', border: '2px solid #737373', borderRadius: '7px', textAlign: 'center', color: '#737373' }}>How to Use?</p>
            <p style={{ width: '259px', height: '50px', border: '2px solid #737373', borderRadius: '7px', textAlign: 'center', color: '#737373' }}>Terms & Conditions</p>
          </div>
          <div className="faq-item" style={{ marginBottom: '20px' }}>
            <h2 style={{
              fontSize: '1.5em',
              marginBottom: '20px',
              textAlign: 'center' // Center the title
            }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}> {/* Added cursor style */}


            </div>
            <p style={{ marginTop: '10px', fontSize: '16px' }}>
              Do I need to have prior Product Management and Project Management experience to enroll in the program?
            </p>
            <p style={{ marginTop: '10px' }}>
              No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
            </p>
          </div>




        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;