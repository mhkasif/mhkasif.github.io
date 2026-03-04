import React from "react";
import dw from "../../images/icons/download.png";
import fb from "../../images/icons/fb.png";
import gh from "../../images/icons/github.png";
import insta from "../../images/icons/insta.png";
import li from "../../images/icons/linkedin.png";
import twitter from "../../images/icons/twitter.png";
import Resume from "../../resume/Resume.pdf";

const LINKS = [
  {
    icon: dw,
    label: "Resume",
    href: Resume,
    download: "MHK-Resume.pdf",
    isDownload: true,
  },
  {
    icon: li,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/mhkasif97/",
  },
  { icon: gh, label: "Github", href: "https://github.com/mhkasif" },
  {
    icon: fb,
    label: "Facebook",
    href: "https://www.facebook.com/mhkasif97",
  },
  {
    icon: insta,
    label: "Instagram",
    href: "https://www.instagram.com/mhkasif/",
  },
  { icon: twitter, label: "Twitter", href: "https://twitter.com/mhkasif" },
];

const ContactLinks = () => {
  return (
    <div className="contact-icons">
      {LINKS.map((link) => (
        <div className="link" key={link.label}>
          <img loading="lazy" className="icons" src={link.icon} alt={link.label} />
          {link.isDownload ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download}
            >
              {link.label}
            </a>
          ) : (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactLinks;
