import React from "react";
import { TbVideoPlus } from "react-icons/tb";
// import { Link } from "react-router-dom";

const HeaderRightLeft = ({ theme }) => {
  return (
    <>
      <div
        className="btn-group "
        aria-label="Button group with nested dropdown"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: " .75rem ",
        }}
      >
        <div className="btn-group " role="group">
          <p id="btnGroupDrop1" data-bs-toggle="dropdown">
            <span
              className={`navbar-brand    ${theme}`}
              style={{
                fontSize: "2.1rem",
                margin: "0 .5rem ",
              }}
            >
              <TbVideoPlus />
            </span>
            <span>
              <span className="visually-hidden"></span>
            </span>
          </p>
          <ul
            className={`dropdown-menu ${theme}`}
            aria-labelledby="btnGroupDrop1"
            style={{ margin: " 0 -10rem " }}
          >
            <li>
              <span className={`dropdown-item  my-2 mr-2 border  ${theme}`}>
                Video Yükle
              </span>
            </li>
            <li>
              <span className={`dropdown-item  my-2 mr-2 border  ${theme}`}>
                Yayın Aç
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderRightLeft;
