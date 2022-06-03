// import Chart from "react-apexcharts";
import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MultiLineChart from "./components/MultilineChart";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "apexchart-example",
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//         },
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <Chart
//         options={this.state.options}
//         series={this.state.series}
//         type="pie"
//         width={500}
//         height={320}
//       />
//     );
//   }
// }

// export default App;

function App() {
  return (
    <div className="App">
      <MultiLineChart />
    </div>
  );
}
export default App;
