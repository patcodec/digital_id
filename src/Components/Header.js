import React from "react";
import profile_image from "../Images/profile_image.png";

export default function Header() {
  return (
    <div>
      <img src={profile_image} className="picture" alt="my_picture" />
    </div>
  );
}
