import React from "react";
// import HeaderBarIcon from "../../Navbar/NavbarLeftComponent/HeaderBarIcon";
// import HeaderLogo from "../../Navbar/NavbarLeftComponent/HeaderLogo";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import NavbarLeftComponent from "./../../Navbar/NavbarLeftComponent/NavbarLeftComponent";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
} from "react-icons/md";

const AsideBarComponent = ({ theme }) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-start ${theme}`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{
          overflowY: "scroll",
          maxWidth: "30%",
          maxHeight: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div
          className={` ${theme} `}
          style={{
            overflow:"hidden",
            margin: "0  0 0 -.5rem",
          }}
        >
          <NavbarLeftComponent theme={theme} />
        </div>

        {/* ######### item bölümü ######### */}

        <div
          className={`fixed-top ${theme}`}
          style={{
            margin: "7.1rem  0 0 -1rem",        
          maxWidth: "4rem",
          minHeight: "100vh",
         
          }}
        >
          <ul
            className={` ${theme}`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <li className={` ${theme}`}>
              <NavLink to="/" className={` ${theme}`}>
                <div
                  className={` ${theme}`}
                  style={{ margin: "2vh  0  .5vh 0" }}
                >
                  <button
                    className={` btn btn  ${theme}`}
                   
                    style={{
                      fontSize: "1.75rem",
                      border: "none",
                      outline: "none",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <AiFillHome />
                    <span
                      className={` ${theme}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // flexDirection: "",

                        width: "12rem",
                      }}
                    >
                      Ana Sayfa
                    </span>
                  </button>
                </div>
              </NavLink>
            </li>

            <li className={` ${theme}`}>
              <NavLink to="/explore" className={` ${theme}`}>
                <div className={` ${theme}`} style={{ margin: "1vh  0 " }}>
                  <button
                    className={` btn btn  ${theme}`}
                  
                    style={{
                      fontSize: "1.75rem",
                      border: "none",
                      outline: "none",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MdOutlineExplore />
                    <span
                      className={` ${theme}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      

                        width: "8.5rem",
                      }}
                    >
                      Keşfet
                    </span>
                  </button>
                </div>
              </NavLink>
            </li>
            <li className={` ${theme}`}>
              <NavLink className={` ${theme}`} to="/shorts">
                <div className={` ${theme}`} style={{ margin: "1vh  0 " }}>
                  <button
                    className={` btn btn  ${theme}`}
                
                    style={{
                      fontSize: "1.3rem",
                      border: "none",
                      outline: "none",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <i className="fa-solid fa-photo-film"></i>
                    <span
                      className={` ${theme}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",

                        alignItems: "center",
                     
                        fontSize: "1.5rem",

                        width: "8rem",
                      }}
                    >
                      Shorts
                    </span>
                  </button>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Subscriptions" className={` ${theme}`}>
                <div className={` ${theme}`} style={{ margin: "1vh  0 " }}>
                  <button
                    className={` btn btn  ${theme}`}
                    // data-bs-toggle="offcanvas"
                    // href="#offcanvasExample"
                    // role="button"
                    // aria-controls="offcanvasExample"
                    style={{
                      fontSize: "1.75rem",
                      border: "none",
                      outline: "none",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MdOutlineSubscriptions />
                    <span
                      className={` ${theme}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // flexDirection: "",

                        width: "14rem",
                      }}
                    >
                      Subscriptions
                    </span>
                  </button>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Library" className={` ${theme}`}>
                <div className={` ${theme}`} style={{ margin: "1vh 0 " }}>
                  <button
                    className={` btn btn  ${theme}`}
                    // data-bs-toggle="offcanvas"
                    // href="#offcanvasExample"
                    // role="button"
                    // aria-controls="offcanvasExample"
                    style={{
                      fontSize: "1.75rem",
                      border: "none",
                      outline: "none",

                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <MdOutlineVideoLibrary />
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // flexDirection: "",

                        width: "12rem",
                      }}
                    >
                      Kütüphane
                    </span>
                  </button>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AsideBarComponent;
