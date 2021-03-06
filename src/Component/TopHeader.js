import React from "react";

import congrats_emoji2 from "../Images/congrats_emoji2.png";
import paytmLogo from "../Images/paytmLogo.png";
import card_border_bottom from "../Images/card_border_bottom.png";
import card_border_top from "../Images/card_border_top.png";
import "./style.css";
const TopHeader = () => {
  return (
    <div
      style={{
        height: "375px",
      }}
    >
      <div className="top_container">
        <div className="title">
          <div>man</div>
          <div className="matters">matters</div>
        </div>

        <div className="congrats_container">
          <p className="text">Congratulations</p>
          <div className="congrats_emoji_container">
            <img src={congrats_emoji2} alt="" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card_border_top">
          <img src={card_border_top} alt="" />
        </div>
        <div className="card_border_bottom">
          <img src={card_border_bottom} alt="" />
        </div>

        <div className="paytm_container">
          <img src={paytmLogo} alt="" />
        </div>
        <div className="gift_card_container">
          <div>
            <span className="gift_card_text">
              <span className="gift_text">Gift</span>
              <span className="card_text">Card</span>
            </span>
            <span className="rupee_container">
              <span className="rupee_symbol"> &#8377;</span>
              <span className="rupee">200</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
