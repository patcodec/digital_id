import React from "react";
import email from "../Images/email.png";
import linkedin from "../Images/linkden.png";

export default function Describe() {
  return (
    <div>
      <div className="super">
        <div className="describe">
          <h1>Kumuda Patel</h1>
          <h2>Frontend Developer</h2>
          <small>kumudapatel.website</small>
          <ul className="button">
            <button className="email">
              <img src={email} className="email_image" alt="email" />
            </button>
            <button className="linkden">
              <img src={linkedin} className="linkden_image" alt="linkden" />
            </button>
          </ul>
        </div>
        <div className="info">
          <h2>About</h2>
          <h4>
            I am a frontend developer with a partucular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </h4>
          <h2>Interests</h2>
          <h4>
            Food Expert. Music scholar. Reader. Internet Fanatic. Classical
            music lover. Coffee fanatic
          </h4>
        </div>
      </div>
    </div>
  );
}
