import React from "react";
import { Link } from "react-router-dom";

const Library = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > Kütüphane (tadilattayız :D)</h1>
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default Library;
