import React from "react";

import HeaderRightMiddle from "./HeaderRightMiddle";
import HeaderRightRight from "./HeaderRightRight";
import HeaderRightLeft from "./HeaderRightLeft";
import { NavLink, Outlet } from "react-router-dom";

const HeaderRightBar = ({ theme, setTheme }) => {
  return (
    <>
      <div className="container d-flex  justify-content-center align-items-center ">
        <div
          style={{
            width: "10%",
          }}
        >
          <div className="row ">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: " 1rem 0",
                padding: " 1rem",
              }}
            >
              <HeaderRightLeft theme={theme} setTheme={setTheme} />

              <HeaderRightMiddle theme={theme} setTheme={setTheme} />

              <HeaderRightRight theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>

        <div style={{ width: "1vw" }}></div>
      </div>
    </>
  );
};

export default HeaderRightBar;
