import React from "react";
import "./Impression.css";
const Impression = () => {
  return (
    <div className="container">
      <div className="text-in-cont">
      <img src="line.svg" alt=""
        style={{height:"50px"}} />
        <p className="para1">
          Impressions <br />
          832
        </p>

        <img
          src="dot1.svg"
          alt=""
          style={{ height: "30px", width: "30px", marginLeft: "50px" }}
        />
      </div>

      <div className="text-in-cont">
      <img src="line.svg" alt=""
        style={{height:"50px"}} />
        <p>
          Total audience <br />
          832
        </p>

        <img
          src="dot1.svg"
          alt=""
          style={{ height: "20px", width: "25px", marginLeft: "50px" }}
        />
      </div>

      <div className="text-in-cont">
      <img src="line.svg" alt=""
        style={{height:"50px"}} />
        <p>
          Engagements <br />
          832
        </p>

        <img
          src="dot1.svg"
          alt=""
          style={{ height: "20px", width: "25px", marginLeft: "50px" }}
        />
      </div>
      <div className="text-in-cont">
      <img src="line.svg" alt=""
        style={{height:"50px"}} />
        <p>
          Engaged audience <br />
          832
        </p>

        <img
          src="dot1.svg"
          alt=""
          style={{ height: "20px", width: "25px", marginLeft: "50px" }}
        />
      </div>
    </div>
  );
};

export default Impression;
