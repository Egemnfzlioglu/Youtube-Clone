import React from "react";
// import HeaderBarIcon from "../../Navbar/HeaderBarIcon";
import { AiFillHome } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineExplore,
} from "react-icons/md";
import AsideBarComponent from "./AsideBarComponent";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Aside = ({ theme }) => {
  return (
    <>
   
      <div
        className={`fixed-top ${theme}`}
        style={{
          margin: "4rem  0 0 0",        
          maxWidth: "5rem",
          minHeight: "100vh",
          backgroundColor: "red",
          borderRight: "1px solid #e6e6e6",
        }}
      >
        <ul
         className={` ${theme}`}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4rem 0",         
            backgroundColor: "red",
          }}
        >
          <li>
            <NavLink  to="/" 
              className={` ${theme}`}>
              <div style={{ margin: "1vh 0 .5vh 0 " }}>
                <button
                  className={` ${theme}`}
                
                  data-bs-toggle="offcanvas"
                 
                  style={{
                    fontSize: "1.75rem",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <AiFillHome />
                  <p
                    className={` ${theme}`}
                  style={{ fontSize: ".75rem" }}>Ana Sayfa</p>
                </button>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="Explore"   className={` ${theme}`}>
              <div   className={` ${theme}`}>
                <button
                  className={` ${theme}`}
                  // className="btn btn btn-outline-success border-0"
                  // data-bs-toggle="offcanvas"
                  // href="#offcanvasExample"
                  // role="button"
                  // aria-controls="offcanvasExample"
                  style={{
                    fontSize: "1.75rem",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <MdOutlineExplore />
                  <p   className={` ${theme}`} style={{ fontSize: ".75rem" }}>Keşfet</p>
                </button>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="shorts"   className={` ${theme}`}>
              <div   className={` ${theme}`}>
                <button
                  className={` ${theme}`}
                  // className="btn btn btn-outline-success border-0"
                  // data-bs-toggle="offcanvas"
                  // href="#offcanvasExample"
                  // role="button"
                  // aria-controls="offcanvasExample"
                  style={{
                    fontSize: "1.4rem",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span   className={` ${theme}`}>
                    {/* ### abc ### */}
                    <i className="fa-solid fa-photo-film" />
                    <p style={{ fontSize: ".75rem" }}>Shorts</p>
                  </span>
                </button>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="subscriptions"   className={` ${theme}`}>
              <div   className={` ${theme}`}>
                <button
                  className={` ${theme}`}
                  // className="btn btn btn-outline-success border-0"
                  // data-bs-toggle="offcanvas"
                  // href="#offcanvasExample"
                  // role="button"
                  // aria-controls="offcanvasExample"
                  style={{
                    fontSize: "1.75rem",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <MdOutlineSubscriptions />
                  <p style={{ fontSize: ".75rem" }}>Abonelikler</p>
                </button>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="library"   className={` ${theme}`}>
              <div   className={` ${theme}`}>
                <button
                  className={` ${theme}`}
                  // className="btn btn btn-outline-success border-0"
                  // data-bs-toggle="offcanvas"
                  // href="#offcanvasExample"
                  // role="button"
                  // aria-controls="offcanvasExample"
                  style={{
                    fontSize: "1.75rem",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <MdOutlineVideoLibrary />
                  <p   className={` ${theme}`} style={{ fontSize: ".75rem" }}>Kütüphane</p>
                </button>
              </div>
            </NavLink>
          </li>
        </ul>

        <div
          className={` ${theme}`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AsideBarComponent />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Aside;
