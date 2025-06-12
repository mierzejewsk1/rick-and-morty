import React from "react";
import { Link } from "react-router-dom";
import rickIcon from "../../assets/images/rick_and_morty_icon.png";

const NavigationLogo: React.FC = () => {
  return (
    <Link to="/">
      <picture
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <source srcSet={rickIcon} />
        <img
          src={rickIcon}
          style={{ height: "5rem" }}
          alt="Rick head as a logo of website"
        />
      </picture>
    </Link>
  );
};

export default NavigationLogo;
