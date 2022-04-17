import React, { useState, useEffect } from "react";
import "./Footer.scss";

const Footer = () => {
  const [currentDate, setcurrentDate] = useState("");

  useEffect(() => {
    setInterval(() => {
      var time = new Date();
      setcurrentDate(
        time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="footer" data-scroll-section>
      <div className="column">
        <h3>Socials</h3>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Spotify</li>
        </ul>
      </div>
      <div className="column">
        <h3>Information</h3>
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="column">three</div>
      <div className="column">
        <h3>Amsterdam {currentDate}</h3>
      </div>
    </div>
  );
};

export default Footer;
