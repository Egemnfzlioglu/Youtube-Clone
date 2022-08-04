import React from "react";
import { Link } from "react-router-dom";

const ChangeUser = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > ChangeUser (tadilattayız :D)</h1>
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default ChangeUser;
