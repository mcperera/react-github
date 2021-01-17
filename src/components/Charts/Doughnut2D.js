import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Doughnut2D = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Stars per Language",
        defaultcenterlabel: "Stars",
        theme: "fusion",
        decimals: 0,
        doughnutRaduiuse: `45%`,
        showPercentValues: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
