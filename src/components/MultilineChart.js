import React from "react";
import data from "./data.json";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

console.log(data);

// console.log(Date.getUTCDay("2022-05-13T21:05:45.8766637Z"));

// let count = 0;
function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();

  newDate.setHours(hours - offset);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekday[newDate.getUTCDay()];
}

// var date = convertUTCDateToLocalDate(new Date("2022-05-13T21:05:45.8766637Z"));
// console.log(date);

// const day = date.getUTCDay();
// console.log("day", day);

// const abc = date.toLocaleString();

// function getDayOfWeek(date) {
//   const dayOfWeek = new Date(date).getDay();
//   return isNaN(dayOfWeek)
//     ? null
//     : [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//       ][dayOfWeek];
// }

// const output = getDayOfWeek(abc);
// console.log(output);

const day = convertUTCDateToLocalDate(new Date("2022-05-13T21:05:45.8766637Z"));
console.log(day);

const newArr = data.filter((item) => {
  // if (item.id === "Demo_Activity" && item.Activity === 1) {
  //     return count++;
  //   }
  return item.id === "Demo_Activity";
});

console.log(newArr.length);

// Sample chart data
const pdata = [
  {
    name: "Monday",
    standing: 11,
    walking: 16,
    running: 55,
  },
  {
    name: "Tuesday",
    standing: 15,
    walking: 18,
    running: 12,
  },
  {
    name: "Wednesday",
    standing: 5,
    walking: 12,
    running: 10,
  },
  {
    name: "Thursday",
    standing: 10,
    walking: 18,
    running: 5,
  },
  {
    name: "Friday",
    standing: 9,
    walking: 17,
    running: 4,
  },
  {
    name: "Saturday",
    standing: 10,
    walking: 16,
    running: 8,
  },
  {
    name: "Sunday",
    standing: 11,
    walking: 19,
    running: 7,
  },
];

const MultiLineChart = () => {
  return (
    <>
      <h1 className="text-heading">Line Chart Using Rechart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="standing" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="walking" stroke="blue" activeDot={{ r: 8 }} />
          <Line dataKey="running" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default MultiLineChart;
