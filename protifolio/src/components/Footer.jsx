import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
 
  const socialMediaLinks = [
    { name: "Instagram", link: "https://www.instagram.com/gedy_zy/", icon: "bi bi-instagram", color: "#E1306C" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/gedion-zeyede-356070298/", icon: "bi bi-linkedin", color: "#0A66C2" },
    { name: "Telegram", link: "https://t.me/gedy_z", icon: "bi bi-telegram", color: "#0088CC" },
  ];

  return (
    <footer className="pt-4">
      <div className="container text-center">
        <div className="mb-4">
          <h3 className="mb-3">Follow Us</h3>
          <div className="d-flex justify-content-center">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="me-3"
                style={{
                  fontSize: "1.5rem",
                  color: social.color,
                }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} GZ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
