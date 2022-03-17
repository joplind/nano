import React from "react";

import Discord from "../img/discord.svg";
import Twitter from "../img/twitter.svg";
import Telegram from "../img/telegram.svg";
import Github from "../img/github.svg";

const Footer = () => {
  return (
    <div className="grouplink">
      <div className="link">
        <div className="resize">
          <img src={Discord} alt="telegram" />
        </div>
        <h5>Discord</h5>
      </div>
      <br />
      <div className="link">
        <div className="resize">
          <img src={Telegram} alt="telegram" />
        </div>
        <h5>Telegram</h5>
      </div>
      <br />
      <div className="link">
        <div className="resize">
          <img src={Twitter} alt="Twitter" />
        </div>
        <h5>Twitter</h5>
      </div>
      <br />
      <div className="link">
        <div className="resize">
          <img src={Github} alt="telegram" />
        </div>
        <h5>Github</h5>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
