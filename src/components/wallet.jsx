import React from "react";
import Data from "../data";

import Wallets from "../components/wallets";

const Wallet = () => {
  return (
    <div id="wallet" className="sect">
      <div className="sec">
        <h1 className="black">Wallets</h1>
        <br />
        <p className="cent">
          Multiple iOS and Android wallets support the WalletConnect protocol.
          Simply scan a QR code from your desktop computer screen to start
          securely using a dApp with your mobile wallet. Interaction between
          mobile apps and mobile browsers are supported via mobile deep linking
        </p>
        <br />
        <br />
        <div className="container">
          <div className="display">
            {Data.map((wallet) => {
              return (
                <>
                  <Wallets wallet={wallet} />
                </>
              );
            })}
          </div>
        </div>
        <br />
        <br />
        <h5 style={{ textAlign: "center" }}>
          Open a pull request on Github to add your wallet here.
        </h5>
      </div>
    </div>
  );
};

export default Wallet;
