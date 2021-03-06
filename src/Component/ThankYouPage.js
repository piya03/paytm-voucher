import React from "react";
import "./thankYouPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import whatsApp_icon from "../Images/whatsApp_icon.png";
import info_icon from "../Images/info_icon.png";

const ThankYouPage = () => {
  return (
    <div>
      <div>
        <div className="first_query">
          <img src={whatsApp_icon} alt="" />
          <div>
            <p className="q1">Where will I get the gift card?</p>
            <p>You will receive it on WhatsApp/SMS on your mobile.</p>
          </div>
        </div>
        <div className="second_query">
          <img src={info_icon} alt="" />
          <div>
            <p className="q2">When will I receive the gift card ?</p>
            <p>Within 48 hours, when your Man Matters order is delivered.</p>
          </div>
        </div>
        <div className="third_query">
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              background: "red",
              width: "25px",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderRadius: "5px",
              padding: "2px",
            }}
          />
          <div>
            <p className="q3">What if I cancel the order?</p>
            <p>The Voucher will not delivered if you cancel the order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
