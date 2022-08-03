import React from "react";
import { Link } from 'react-router-dom';

const Shorts = ({theme}) => {
  return (
    <div className={`container ${theme}`}>
      <h1 > Shorts (tadilattayız :D)</h1>
      <Link to="/">Ana Sayfaya Dön </Link>
    </div>
  );
};

export default Shorts;
