import React from "react";

import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div
        style={{
          marginLeft: "10rem",
        }}
      >
        <h1>
          ARAMA KISMI YUKARIDAKİ KISIMDAN YAPILIYOR...
          {/* yukarı ok */}
          <Link to="/">
            <i className="fas fa-arrow-circle-up"></i>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Search;
