import React from "react";

import HeaderBarIcon from "../NavbarLeftComponent/HeaderBarIcon";
import HeaderLogo from "../NavbarLeftComponent/HeaderLogo";

const NavbarLeftComponent = ({ theme }) => {
  return (
    <li
      theme={theme}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div className={` ${theme}`} style={{}}>
        <HeaderBarIcon theme={theme} />
      </div>
      <div className={` ${theme}`} style={{ padding: "0 0 0 5rem  " }}>
        <HeaderLogo theme={theme} />
      </div>
    </li>
  );
};

export default NavbarLeftComponent;
