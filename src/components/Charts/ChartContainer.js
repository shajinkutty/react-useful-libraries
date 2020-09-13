import React from "react";
import Header from "../../Header";
import LineChart from "./LineChart";

function ChartContainer() {
  return (
    <div>
      <Header
        title="Charts"
        link="https://jerairrest.github.io/react-chartjs-2/"
      />
      <LineChart />
    </div>
  );
}

export default ChartContainer;
