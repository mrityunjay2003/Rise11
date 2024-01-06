import React from "react";
import "./Stats.css";
const Stats = () => {
  const week = [
    {
      image: "uiux2.jpg",
      text1: "Adobe XD Part 01",
      text2: "UI/UX Design",
      price: "$20",
    },
    {
      image: "uiux2.jpg",
      text1: "Adobe XD Part 02",
      text2: "UI/UX Design",
      price: "$20",
    },
    {
      image: "uiux2.jpg",
      text1: "Adobe XD Part 03",
      text2: "UI/UX Design",
      price: "$20",
    },
  ];
  return (
    <div className="stats">
      <thead>
        <th>Weekly Sales Stats</th>
        <br />
      </thead>
      <tbody>
        {week.map((stat) => (
          <tr>
            <td className="r1">
              <div className="image">
                {" "}
                <img
                  src={stat.image}
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
              </div>

              <div className="texty">
                {" "}
                {stat.text1}
                <br />
                {stat.text2}
              </div>
            </td>

            <td>
            <button class="button-48" role="button"><span class="text">{stat.price}</span></button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default Stats;
