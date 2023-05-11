import React from "react";

const topChart = () => {
  return (
    <div className="top-cart-row">
      <div className="col">
        <div className="top-subtitle">My balance</div>
        <div className="top-price">$921.48</div>
      </div>

      <div className="logo">
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default topChart;
