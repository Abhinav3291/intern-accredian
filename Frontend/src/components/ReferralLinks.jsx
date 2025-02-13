import  { useState } from 'react';



const ReferralLinks = () => {
  const [activeLink, setActiveLink] = useState('refer'); // Initialize active link

  const links = [
    { href: '#', label: 'Refer', id: 'refer' },
    { href: '#', label: 'Benefits', id: 'benefits' },
    { href: '#', label: 'FAQs', id: 'faqs' },
    { href: '#', label: 'Support', id: 'support' },
  ];

  const handleClick = (id) => {
    setActiveLink(id);
  };

 


  return (
    <div 
      className="referral-links" // Add a class for easier styling
      style={{
        backgroundColor: 'white',
        padding: '10px',
        width: 'auto', // Or a specific width if needed
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        justifyContent: 'center', // Center the links horizontally
        alignItems: 'center',    // Center the links vertically
        borderRadius: '20px',    // Add the rounded corners
        border: '1px solid #ccc',
        marginInline: '20% 20%' ,
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
      }}
    >
      {links.map(link => (
        <a
          key={link.id}
          href={link.href}
          className={activeLink === link.id ? 'active' : ''}
          onClick={() => handleClick(link.id)}
          style={{
            display: 'inline-block',
            margin: '0 10px',
            textDecoration: 'none',
            color: '#333',
            borderRadius: '38px',
            
          }}
          onMouseEnter={(e) => {
            if (activeLink !== link.id) {
              e.target.style.color = '#007bff';
            }
          }}
          onMouseLeave={(e) => {
            if (activeLink !== link.id) {
              e.target.style.color = '#333';
            }
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default ReferralLinks;