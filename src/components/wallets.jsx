import React from "react";
import { Link } from "react-router-dom";

const Wallets = ({ wallet }) => {
  return (
    <>
      <Link to="/phrase" key={wallet.id}>
        <div className="box">
          <img className="boxd" src={wallet.image} alt="icon" />
        </div>
        <p className="cent">{wallet.name}</p>
      </Link>
    </>
  );
};

export default Wallets;
