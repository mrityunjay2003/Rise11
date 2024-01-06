import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import "./index.css";
import LineChart from "./Component/Charts/LineChart";
import ProductTable from "./Component/Table/ProductTable";
import Impression from "./Component/Impressions/Impression";
import DonutChart from "./Component/Charts/DonutChart";
import BarChart from "./Component/Charts/BarChart";
import StudentQueries from "./Component/Queries/StudentQueries";
import Stats from "./Component/Stats/Stats";

const App = () => {
  return (
    <div>
      <Navbar />
      <Impression />
      <div className="level2">
        <div className="line-chart">
          <LineChart />
        </div>
        <div className="bar-chart">
          <BarChart />
        </div>
      </div>
      <div className="level3">
        <div className="donut">
          <DonutChart />
        </div>
        <div className="stats">
          <Stats />
        </div>
 
        <div className="query">
          <StudentQueries/>
        </div>
      </div>
      <div className="level4">
        <ProductTable/>
      </div>
    </div>
  );
};

export default App;
