import React from "react";
// import { useParams } from "react-router-dom";

const HeaderMiddleBar = ({
  // items,
  // loading,
  setLoading,
  // theme,
  // setTheme,
  search,
  setSearch,
  // fetchVideo,
  fetchSearch,
  // searchItems,
  setSearchItems,
}) => {
  // const useP = useParams();
  // console.log( useP);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{}}>
        {/* <input " type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/> */}
        <input
          className="form-control form-control-sm"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            fontSize: "1.5rem",
            border: "none",
            outline: "none",
            padding: "0 .5rem",
            background: "transparent",
          }}
        />
      </div>
      <div style={{}}>
        <button
          className="btn btn-outline-success border"
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            fetchSearch(search);
            setSearchItems(search);
            setLoading(false);
          }}
          onClick={() => fetchSearch(search)}
          style={{
            padding: ".5rem 1rem",
            fontSize: "1.2rem",
            border: "none",
            textAlign: "center",
          }}
        >
          {/* {console.log(search.map((a)=>a))} */}
          <i className="fa-solid fa-search" />
        </button>
      </div>
    </div>
  );
};

export default HeaderMiddleBar;
