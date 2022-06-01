import React from "react";
import image from "./assets/testimage.jpg"

const ContactSection = () => {
  return (
    <div className="contact" data-scroll-section>
      <img className="image-test" src={image} alt="testimage" max-width="100%"
 />


      <h1>Contact</h1>
      <h2>hello@qvstudio.com</h2>
      <p>
        If you’d like to partner on a project or just chat about what we could
        do together
      </p>
      <h3>Socials</h3>
      <ul>
        <li>Instagram</li>
        <li>Linkedin</li>
        <li>GitHub</li>
        <li>Spotify</li>
      </ul>
    </div>
  );
};

export default ContactSection;
