import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLogo = ({ theme }) => {
  return (
    <>
      <NavLink
        to="/"
        className={`  ${theme}`}
        style={{ textDecoration: "none" }}
      >
        <div className="btn-group " role="group">
          <span
            className="navbar-brand "
            href="#"
            style={{
              fontSize: "1.3rem",
              textDecoration: "none",
              padding: " .5vw ",

              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
              alt="logo"
              style={{
                maxWidth: "2.5vw",
                padding: "0 0 .5vw 0",
                // margin: "0 auto",
                // fontWeight: "bold",
              }}
            />
            <h3 style={{ width: "2%" }}>
              YouTube
              <sup style={{ fontSize: "50%" }}>
                <sup>TR</sup>
              </sup>
            </h3>
          </span>
          <span
            style={{ fontSize: ".7rem" }}
            // className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <span className="visually-hidden"></span>
          </span>
        </div>
      </NavLink>
    </>
  );
};

export default HeaderLogo;
