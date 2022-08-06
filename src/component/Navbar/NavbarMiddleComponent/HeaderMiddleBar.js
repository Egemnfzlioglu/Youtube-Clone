import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const HeaderMiddleBar = ({
  theme,
  search,
  setSearch,
  fetchSearch,
  setSearchItems,
}) => {
  // console.log("🚀 ~ file: HeaderMiddleBar.js ~ line 17 ~ searchItems", searchItems)
  // console.log("🚀 ~ file: HeaderMiddleBar.js ~ line 17 ~ search", search)
  // const useP = useParams();
  // console.log("useP", useP);

  return (
    <div
      className="border"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        className={`form-control  ${theme}`}
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // aria-label="Recipient's username"
        // aria-describedby="button-addon2"
        style={{
          width: "50vh",
          fontSize: "1.5rem",
          border: "none",
          outline: "none",
          padding: "0 .5rem",
          borderRight: "2px solid #e6e6e6",
          // background: "transparent",
        }}
      />

      <Link to={`search/${search}`} >
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
          onSubmit={(e) => {
            e.preventDefault();
            fetchSearch(search);
            setSearchItems(search);
          }}
          onClick={() => fetchSearch(search)}
          disabled={search === null || search === ""}
          style={{
            padding: ".5rem 1rem",
            fontSize: "1.2rem",
            border: "none",
            textAlign: "center",
          }}
        >
          <i className="fa-solid fa-search " />
        </button>

        <Outlet />
      </Link>
    </div>
  );
};

export default HeaderMiddleBar;
