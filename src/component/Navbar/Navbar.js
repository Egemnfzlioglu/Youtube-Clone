import React from "react";
import HeaderMiddleBar from "./NavbarMiddleComponent/HeaderMiddleBar";
import MicIcon from "./NavbarMiddleComponent/MicIcon";

import HeaderRightBar from "./NavBarRightComponent/HeaderRightBar";
import "../../style.css";
import { Outlet } from "react-router-dom";
import NavbarLeftComponent from "./NavbarLeftComponent/NavbarLeftComponent";

const Navbar = ({
  items,
  // loading,
  // setLoading,
  theme,
  setTheme,
  search,
  setSearch,
  // fetchVideo,
  fetchSearch,
  searchItems,
}) => {
  return (
    <ul
      className={`navbar navbar-expand-lg  sticky-top ${theme}`}
      style={{
        width: "100vw",
        maxHeight: "7vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        borderTop: "1px solid #e6e6e6",
        borderBottom: "1px solid #e6e6e6",
      }}
    >
      <NavbarLeftComponent theme={theme} items={items} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderMiddleBar
          theme={theme}
          setTheme={setTheme}
          search={search}
          setSearch={setSearch}
          fetchSearch={fetchSearch}
          items={items}
          searchItems={searchItems}
          
        />

        <div style={{}}>
          <MicIcon />
        </div>
      </div>
      <div>
        <HeaderRightBar theme={theme} setTheme={setTheme} items={items} />
      </div>
      <Outlet />
    </ul>
  );
};
export default Navbar;
