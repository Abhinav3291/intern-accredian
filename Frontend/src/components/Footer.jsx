
const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#333', 
            color: '#fff',           
            padding: '50px',       
            display: 'flex',          
            flexDirection: 'column',   
            alignItems: 'center',     
            width: '100%'           
        }}>

<div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '960px',  // Match the width of the main content
                marginBottom: '20px' // Add some spacing below
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}> {/* Logo container */}
                    <img src="\public\accredainnew.webp.png" alt="Accredian Logo" style={{ height: '40px' }} /> {/* Replace with your logo path and adjust height */}
                    
                </div>

                <div> {/* Schedule Call Button */}
                    <button style={{
                        backgroundColor: '#007bff', // Blue button
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Schedule 1-on-1 Call Now</button>
                    <p style={{ fontSize: '0.8em', marginTop: '5px' }}>Speak with our Learning Advisor</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '960px', marginBottom: '30px' }}> {/* Container for columns */}

                <div style={{ flex: 1, textAlign: 'left' }}> {/* Programs Column */}
                    <h4 style={{ color: '#fff', marginBottom: '10px' }}>Programs</h4>
                    <ul style={{ listStyle: 'none', padding: '5px' }}>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Data Science & AI</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Product Management</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Business Analytics</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Digital Transformation</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Business Management</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Project Management</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Strategy & Leadership</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Senior Management</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Fintech</a></li>
                    </ul>
                </div>

                <div style={{ flex: 1, textAlign: 'left'  , marginInline: '20px 50px'}}> {/* Contact Us Column */}
                    <h4 style={{ color: '#fff', marginBottom: '10px' }}>Contact Us</h4>
                    <p style={{ marginBottom: '5px' }}>Email us (For Data Science Queries): admissions@accredian.com</p>
                    <p style={{ marginBottom: '5px' }}>Email us (For Product Management Queries): pm@accredian.com</p>
                    <p style={{ marginBottom: '5px' }}>Data Science Admission Helpline: +91 9079653292 (9 AM-7 PM)</p>
                    <p style={{ marginBottom: '5px' }}>Product Management Admission Helpline: +91-9625811095</p>
                    <p style={{ marginBottom: '5px' }}>Enrolled Student Helpline: +91 796322507</p>
                    <p style={{ marginBottom: '5px' }}>Office Address: 4th Floor, 250, Phase Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}> {/* Social Media Icons */}
                        <a href="#" style={{ color: '#fff' }}><i className="fab fa-facebook-f"></i></a>
                        <a href="#" style={{ color: '#fff' }}><i className="fab fa-twitter"></i></a>
                        <a href="#" style={{ color: '#fff' }}><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" style={{ color: '#fff' }}><i className="fab fa-instagram"></i></a>
                        <a href="#" style={{ color: '#fff' }}><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div style={{ flex: 1, textAlign: 'left' }}> {/* Accredian Column */}
                    <h4 style={{ color: '#fff', marginBottom: '10px' }}>Accredian</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Career</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Blog</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Admission Policy</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Referral Policy</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a></li>
                        <li style={{ marginBottom: '5px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Master FAQ</a></li>
                    </ul>
                </div>

            </div> {/* End of container for columns */}

            <p style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '20px' }}>
                &copy; 2024 Accredian & Brand of Fullttack Education Pvt Ltd. All Rights Reserved.
            </p>

        </footer>
    );
};

export default Footer;