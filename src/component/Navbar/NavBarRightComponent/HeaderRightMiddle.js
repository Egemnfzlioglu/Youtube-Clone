import React from "react";

const HeaderRightMiddle = ({ theme }) => {
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
          margin: " .75rem 0",
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
              <i className="fa-regular fa-bell" />
            </span>
            <span
              className={`position-absolute bottom-50 start-90  translate-middle badge rounded-pill bg-danger `}
            >
              99+
              <span className="visually-hidden"></span>
            </span>
          </p>

          <ul
            className={`dropdown-menu ${theme}  border`}
            aria-labelledby="btnGroupDrop3"
            style={{ margin: " 0 -15rem " }}
          >
            <li>
              <span className={`dropdown-item    ${theme}`}>
                <button
                  type="button"
                  className={` btn btn-outline-primary    ${theme}`}
                >
              <p>Egemen Fazlıoğlu  yeni bir video yükledi</p>
                </button>
              </span>
            </li>
            <li>
              <span className={`dropdown-item     ${theme}`}>
                <button
                  type="button"
                  className={` btn btn-outline-primary    ${theme}`}
                >
                  <p>Egemen Fazlıoğlu  yeni bir video yükledi</p>
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderRightMiddle;
