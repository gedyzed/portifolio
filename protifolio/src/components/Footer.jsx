import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  // List of social media platforms with links, icons, colors, and names
  const socialMediaLinks = [
    { name: "Facebook", link: "https://facebook.com", icon: "bi bi-facebook", color: "#1877F2" },
    { name: "Twitter", link: "https://twitter.com", icon: "bi bi-twitter", color: "#1DA1F2" },
    { name: "Instagram", link: "https://instagram.com", icon: "bi bi-instagram", color: "#E1306C" },
    { name: "LinkedIn", link: "https://linkedin.com", icon: "bi bi-linkedin", color: "#0A66C2" },
    { name: "Telegram", link: "https://telegram.org", icon: "bi bi-telegram", color: "#0088CC" },
  ];

  return (
    <footer className="pt-4">
      <div className="container text-center">
        {/* Follow Us Section */}
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

        {/* Copyright Notice */}
        <p className="mb-0">
          © {new Date().getFullYear()} GZ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
