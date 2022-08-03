import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > UserProfile (tadilattayız :D)</h1>
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default UserProfile;
