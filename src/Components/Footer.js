import React from "react";
import facebook_icon from "../Images/Facebook Icon.png";
import github_icon from "../Images/GitHub Icon.png";
import instagram_icon from "../Images/Instagram Icon.png";
import twitter_icon from "../Images/Twitter Icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="icons">
        <li>
          <img src={facebook_icon} alt="facebook" />
        </li>
        <li>
          <img src={github_icon} alt="github" />
        </li>
        <li>
          <img src={instagram_icon} alt="instagram" />
        </li>
        <li>
          <img src={twitter_icon} alt="twitter" />
        </li>
      </ul>
    </div>
  );
}
