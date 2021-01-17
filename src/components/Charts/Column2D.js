import React from "react";

import ReactFC from "react-fusioncharts";

import FusionCharts from "fusioncharts";

import Column2D from "fusioncharts/fusioncharts.charts";

import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Column2DChart = ({ data }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Most Popular",
        xAxisName: "Repos",
        yAxisName: "Stars",
        theme: "fusion",
        doughnutRaduiuse: `45%`,
        showPercentValues: 0,
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column2DChart;
