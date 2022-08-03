import React from "react";
import { Link } from "react-router-dom";

const Subscriptions = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > Subscriptions (tadilattayız :D)</h1>
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default Subscriptions;
