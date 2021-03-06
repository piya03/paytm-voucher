import React, { useState, useEffect } from "react";
import test_icon from "../Images/test_icon.png";
import ThankYouPage from "./ThankYouPage";

import "./login.css";

const LogInPage = () => {
  let numFromLocal = JSON.parse(localStorage?.getItem("userNum"));

  const [mobileNum, setMobileNum] = useState(numFromLocal || "");
  const [activeBtn, setActiveBtn] = useState(false);
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  function btnStyle() {
    return {
      background: activeBtn && mobileNum.length === 10 ? "#019fe3" : "#c9c9c9",
      boxShadow:
        activeBtn && mobileNum.length === 10 ? "0px 10px 16px #b5deef" : "",
    };
  }
  function IsMobileNumberIndia(num) {
    var rule = /([6-9]\d{9})/;
    let parseNum = parseInt(num);
    if (rule.test(parseNum)) {
      setActiveBtn(true);
      return;
    } else {
      alert("enter Valid indian number");
      return false;
    }
  }

  function onKeyPressFun(e) {
    let char = String.fromCharCode(e.which);
    if (!/[0-9]/.test(char)) {
      e.preventDefault();
    }
  }
  function saveNum() {
    if (mobileNum.length !== 10) {
      return;
    }
    localStorage.setItem("userNum", JSON.stringify(mobileNum));
    setShowThankYouPage(true);
  }
  useEffect(() => {
    if (numFromLocal == mobileNum) {
      setShowThankYouPage(true);
    }
  }, []);
  useEffect(() => {
    if (mobileNum.length === 10) {
      IsMobileNumberIndia(parseInt(mobileNum));
    }
  }, [mobileNum]);
  return (
    <div>
      {!showThankYouPage && (
        <div>
          <p className="discription">
            You have WON Paytm Gift
            <br /> Card of Rs 200 for{" "}
            <strong>
              Placing the order
              <br /> on Man Matters
            </strong>{" "}
          </p>
          <div className="main_container">
            <input
              className="inputBox"
              type="text"
              maxLength="10"
              value={mobileNum}
              onChange={(e) => {
                setMobileNum(e.target.value);
              }}
              onKeyPress={(e) => onKeyPressFun(e)}
              placeholder="Enter Mobile Number"
            />
            {mobileNum.length !== 10 && (
              <p className="info_text">
                {" "}
                Enter the same number used on Man Matters
              </p>
            )}
            <button
              className="btn"
              style={btnStyle()}
              onClick={() => {
                if (!mobileNum.trim()) {
                  return;
                }
                saveNum();
              }}
            >
              Enter the my Paytm Gift Card &gt;
            </button>
          </div>
        </div>
      )}
      {showThankYouPage && <ThankYouPage />}
      <div className="powered_by_container">
        <p> Powered by</p>
        <img src={test_icon} alt="" />
        <strong>GoKwik</strong>
      </div>
    </div>
  );
};

export default LogInPage;
