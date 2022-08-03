import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../../style.css";

const HeaderRightRight = ({ theme, setTheme }) => {
  useEffect(() => {
    document.body.className = theme;

    console.log(theme);
    //eslint-disable-next-line
  });

  const toggleTheme = () => {
    setTheme(theme === "bgDarkapp" ? "bgLightapp" : "bgDarkapp");
  };

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
          margin: "0 .75rem ",
        }}
      >
        <div className="btn-group " role="group">
          <p id="btnGroupDrop1" data-bs-toggle="dropdown">
            <span
              className={`navbar-brand    ${theme}`}
              style={{
                fontSize: "2rem",
                margin: " .5rem ",
              }}
            >
              E
            </span>
            <span>
              {/* 99+ */}
              <span className="visually-hidden"></span>
            </span>
          </p>

          {/* 
          #######################################################################################
          ########                                                                      #########
          ########                           burası önemli                              ######### 
          ########                                                                      ######### 
          ####################################################################################### 
          */}
          <ul
            className={`dropdown-menu ${theme} `}
            style={{ margin: " 0 -10rem " }}
            aria-labelledby="btnGroupDrop1"
          >
            <li>
              <NavLink
                to="/userprofile"
                className={`dropdown-item my-2 border  ${theme}`}
              >
                EGEMEN FAZLIOĞLU
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/channel"
                className={`dropdown-item my-2 border  ${theme}`}
              >
                KANALINIZ
              </NavLink>
            </li>
            <li className={` ${theme}`}>
              <NavLink
                to="changeuser"
                className={`dropdown-item my-2 border  ${theme}`}
              >
                Hesap Değiştir
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={`dropdown-item  my-2 border  ${theme}`}
              >
                OTURUMU KAPAT
              </NavLink>
            </li>
            <li>
              <span className={`dropdown-item  my-2 mr-2 border  ${theme}`}>
                Theme
                <button
                  className={`btn btn m-3 border  ${theme}`}
                  // className="btn btn-outline-success"
                  type="submit"
                  style={{
                    padding: ".5rem 2rem ",
                    fontSize: "1rem",
                  }}
                  onClick={() => toggleTheme()}
                >
                  {theme ? "Dark" : "Light"}
                </button>
              </span>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default HeaderRightRight;
