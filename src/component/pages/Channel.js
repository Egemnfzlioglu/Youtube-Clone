import React from "react";
import { Link } from "react-router-dom";

const Channel = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > Channel (tadilattayız :D)</h1>
      
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default Channel;
