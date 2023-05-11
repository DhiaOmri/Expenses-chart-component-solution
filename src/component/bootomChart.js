import React from "react";

function bootomChart() {
  return (
    <div className="bottom-cart-row">
      <div className="col">
        <div className="bottom-subtitle">Total this month</div>
        <div className="bottom-price">$478.33</div>
      </div>
      <div className="col">
        <div className="percentage">+2.4%</div>
        <span>from last month</span>
      </div>
    </div>
  );
}

export default bootomChart;
