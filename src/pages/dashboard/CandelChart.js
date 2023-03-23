import Chart from "react-apexcharts";
import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useGetChartsDataQuery } from "../../services/api";

const CandelChart = (props) => {
  const { data: getChartsData } = useGetChartsDataQuery({
    symbol: props?.data,
    period: props.chartPeriod,
    dataset1: props.dataset1,
    dataset2: props.dataset2,
    dataset3: props.dataset3,
  });
  console.log("chartData");
  console.log(getChartsData);
  const seriesData = getChartsData?.data;

  const handlConverter = () => {
    let series =
      typeof seriesData == "undefined"
        ? []
        : seriesData.map(({ close, datetime, high, low, open }) => {
            let yaxis = [];
            yaxis.push(close, high, low, open);
            return {
              x: new Date(datetime),
              y: yaxis,
            };
          });
    return series;
  };

  const dat = handlConverter();
  const series = {
    series: [
      {
        data: dat,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  const handleClick = (e, data) => {
    alert(`Clicked on menu ${data.item}`);
  };

  return (
    <div>
      <ContextMenuTrigger id="add_same_id">
        <Chart
          options={series.options}
          series={series.series}
          type="candlestick"
          width="100%"
          height={240}
        />
      </ContextMenuTrigger>

      <ContextMenu className="menu" id="add_same_id">
        <MenuItem
          onClick={handleClick}
          data={{ item: "Add to watchlist" }}
          className="menuItem"
        >
          Add to watchlist
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Create alert" }}
          className="menuItem"
        >
          Create alert
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "New order" }}
          className="menuItem"
        >
          New order
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Draw" }}
          className="menuItem"
        >
          Draw
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Save chart" }}
          className="menuItem"
        >
          Save chart
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Load chart" }}
          className="menuItem"
        >
          Load chart
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Print chart" }}
          className="menuItem"
        >
          Print chart
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Reset chart" }}
          className="menuItem"
        >
          Reset chart
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Reset chart" }}
          className="menuItem"
        >
          Reset chart
        </MenuItem>
      </ContextMenu>
    </div>
  );
};

export default CandelChart;
