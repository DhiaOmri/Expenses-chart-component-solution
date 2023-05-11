import BootomChart from "./bootomChart";
import { useState } from "react";
import React from "react";
import data from "../assetes/data.json";
const ChartContent = () => {
  const posts = data;
  const weekday = ["sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  const today = weekday[d.getDay()];

  console.log(today.toLocaleLowerCase());
  return (
    <div className="cart-content-row">
      <h1> Spending - Last 7 days</h1>
      <div className="data-row">
        {posts.map((post) => (
          <div className="data" id={post.day} key={post.day}>
            <div
              className={
                "amount " +
                (post.day === today.toLocaleLowerCase() ? "current" : "")
              }
              data-amount={"$" + post.amount}
            >
              <figure style={{ height: 5 * post.amount }}></figure>
            </div>
            <sapn className="day">{post.day}</sapn>
          </div>
        ))}
      </div>

      <BootomChart></BootomChart>
    </div>
  );
};
export default ChartContent;
