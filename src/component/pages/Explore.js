import React from "react";
import { Link } from 'react-router-dom';

const Explore = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > Explore (tadilattayız :D)</h1>
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default Explore;
