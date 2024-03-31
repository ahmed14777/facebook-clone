import React from "react";
import "./Logo.css";

// logo component reusable to change the image , alt , and with with tailwind or add class with new style
const Logo = ({ LogoImg, alt, width }) => {
  return (
    <div
      className={` Logo-container mx-2  rounded-full overflow-hidden ${width}`}
    >
      <img src={LogoImg} alt={alt} />
    </div>
  );
};

export default Logo;
