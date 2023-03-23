import Chart from "react-apexcharts";

import React, { useState, useEffect } from "react";

import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useGetChartsDataQuery } from "../../services/api";
import DragableChartLine from "./drawObjects/DragableChartLine";
import HorizontalVertical from "./drawObjects/HorizontalVertical";
import CrossHair from "./drawObjects/CrossHair";
import CSVReader from "./CSVReader/CSVReader";
import { chartData } from "../../redux/chartSlice";
import { useDispatch } from "react-redux";
import ImportVerticalObjects from "./drawObjects/ImportVerticalObjects";
import DragableTrendLine from "./drawObjects/DragableTrendLine";
import ArraowHeadLine from "./drawObjects/ArraowHeadLine";
const CustomCandleChart = (props) => {
  const [horizontalLine, setHorizontalLine] = useState([]);
  const [verticalLine, setVerticalLine] = useState([]);
  const [arrrowLine, setArrrowLine] = useState([]);
  const [trendLine, setTrendLine] = useState([]);
  const [crossHairLines, setCrossHairLines] = useState([]);
  useEffect(() => {
    if (props.fileData.length > 5) setscvCondition(true);
    else setscvCondition(false);

    if (props.fileData.length > 5 && props.objectFileData.length > 0) {
      for (let i = 0; i < props.objectFileData.length; i++) {
        if (props.objectFileData[i].type == "vertical") {
          if (verticalLine.length < 1)
            setVerticalLine(props.objectFileData[i].Vertical);
        }
        if (props.objectFileData[i].type == "horizontal") {
          if (horizontalLine.length < 1)
            setHorizontalLine(props.objectFileData[i].Horizontal);
        }
        if (props.objectFileData[i].type == "arrow-head") {
          if (arrrowLine.length < 1)
            setArrrowLine(props.objectFileData[i].ArrowHead);
        }
        if (props.objectFileData[i].type == "trend-line") {
          if (trendLine.length < 1)
            setTrendLine(props.objectFileData[i].TrendLine);
        }
        if (props.objectFileData[i].type == "cross-hair") {
          if (crossHairLines.length < 1)
            setCrossHairLines(props.objectFileData[i].CrossHair);
        }
      }
    } else {
      setHorizontalLine([]);
      setVerticalLine([]);
      setArrrowLine([]);
      setTrendLine([]);
      setCrossHairLines([]);
    }
  }, [props.fileData]);

  console.log("vertical", verticalLine);
  const dispatch = useDispatch();
  const { data: getChartsData } = useGetChartsDataQuery({
    symbol: props?.data,
    period: props.chartPeriod,
    dataset1: props.dataset1,
    dataset2: props.dataset2,
    dataset3: props.dataset3,
  });

  const [csvData, setCsvData] = useState([]);
  const [scvCondition, setscvCondition] = useState(false);

  let seriesData = getChartsData?.data;
  useEffect(() => {
    if (getChartsData != undefined) dispatch(chartData(getChartsData?.data));
  }, [getChartsData]);

  const CSVDataHandler = (data) => {
    sortdata(data);
  };
  const showLive = () => {
    setCsvData([]);
    setscvCondition(false);
  };
  const sortdata = (data) => {
    let val = data[0];
    let low1 = 0;
    let open1 = 0;
    let high1 = 0;
    let close1 = 0;
    let ind1 = 0;
    let ind2 = 0;
    let ind3 = 0;
    let dat1 = 0;
    for (let j = 0; j < 8; j++) {
      if (val[j] == "low") low1 = j;
      else if (val[j] == "open") open1 = j;
      else if (val[j] == "high") high1 = j;
      else if (val[j] == "close") close1 = j;
      else if (val[j] == "dataset1") ind1 = j;
      else if (val[j] == "dataset2") ind2 = j;
      else if (val[j] == "dataset3") ind3 = j;
      else if (val[j] == "datetime") dat1 = j;
    }
    for (let i = 1; i < data.length - 1; i++) {
      let val2 = data[i];
      csvData.push({
        low: parseInt(val2[low1]),
        high: parseInt(val2[high1]),
        open: parseInt(val2[open1]),
        datetime: parseInt(val2[dat1]),
        close: parseInt(val2[close1]),
        dataset2: parseInt(val2[ind2]),
        dataset3: parseInt(val2[ind3]),
        dataset1: parseInt(val2[ind1]),
      });
    }

    if (csvData.length > 5) setscvCondition(true);
  };

  // console.log("csv1", csvData);
  const handlConverter = (seriesData) => {
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
  const Indicator1Converter = (seriesData) => {
    let series =
      typeof seriesData == "undefined"
        ? []
        : seriesData.map(({ datetime, dataset1 }) => {
            return {
              x: new Date(datetime),
              y: dataset1,
            };
          });
    return series;
  };
  const Indicator2Converter = (seriesData) => {
    let series =
      typeof seriesData == "undefined"
        ? []
        : seriesData.map(({ datetime, dataset2 }) => {
            return {
              x: new Date(datetime),
              y: dataset2,
            };
          });
    return series;
  };
  const Indicator3Converter = (seriesData) => {
    let series =
      typeof seriesData == "undefined"
        ? []
        : seriesData.map(({ datetime, dataset3 }) => {
            return {
              x: new Date(datetime),
              y: dataset3,
            };
          });
    return series;
  };

  const dat = handlConverter(seriesData);
  const d1 = Indicator1Converter(seriesData);
  const d2 = Indicator2Converter(seriesData);
  const d3 = Indicator3Converter(seriesData);
  // console.log("d1", d1);
  let series1 = [];
  if (scvCondition == false) {
    series1.push({ name: "candle chart", type: "candlestick", data: dat });
    if (props.dataset1 !== null) {
      series1.push({
        name: props.dataset1,
        type: "line",
        color: "#ff0015",
        data: d1,
      });
    }
    if (props.dataset2 !== null) {
      series1.push({
        name: props.dataset2,
        type: "line",
        color: "#737171",
        data: d2,
      });
    }
    if (props.dataset3 !== null) {
      series1.push({
        name: props.dataset3,
        type: "line",
        color: "#ff7300",
        data: d3,
      });
    }
  }
  if (scvCondition == true) {
    const d4 = handlConverter(props.fileData);
    const d1 = Indicator1Converter(props.fileData);
    const d2 = Indicator2Converter(props.fileData);
    const d3 = Indicator3Converter(props.fileData);
    // console.log("d4", d4);
    series1 = [];
    series1.push({ name: "candle chart", type: "candlestick", data: d4 });
    series1.push({
      name: "indicator1",
      type: "line",
      color: "#ff0015",
      data: d1,
    });
    series1.push({
      name: "indicator2",
      type: "line",
      color: "#737171",
      data: d2,
    });
    series1.push({
      name: "indicator3",
      type: "line",
      color: "#ff7300",
      data: d3,
    });
  }
  // console.log(series1);
  const series = {
    series: [
      {
        name: "candle",
        type: "candlestick",
        data: dat,
      },
    ],
    series1: series1,
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "Candle Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  const handleClick = (e, data) => {
    alert(`Clicked on menu ${data.item}`);
  };

  return (
    <div className="heno">
      <ContextMenuTrigger id="add_same_id">
        <Chart
          options={series.options}
          series={series.series1}
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

        <MenuItem data={{ item: "Download chart" }} className="menuItem">
          Save chart
        </MenuItem>
        <MenuItem
          onClick={handleClick}
          data={{ item: "Reset chart" }}
          className="menuItem"
        >
          Reset chart
        </MenuItem>
      </ContextMenu>
      {props.horizontal != 0 ? <HorizontalVertical type="horizontal" /> : null}
      {props.vertical != 0 ? <HorizontalVertical type="vertical" /> : null}
      {props.crossHair != 0 ? <CrossHair /> : null}
      {props.arrowed != 0 ? <ArraowHeadLine /> : null}
      {props.trend != 0 ? <DragableTrendLine /> : null}
      {/* {props.angleTrend != 0 ? (
        <DragableChartLine type="angleTrend" showHead={false} />
      ) : null} */}
      {horizontalLine.length > 0 ? (
        <HorizontalVertical type="horizontal" horizontalLine={horizontalLine} />
      ) : null}
      {verticalLine.length == 2 ? (
        <ImportVerticalObjects type="vertical" verticalLine={verticalLine} />
      ) : null}
      {arrrowLine.length > 0 ? (
        <ArraowHeadLine arrrowLine={arrrowLine} />
      ) : null}
      {trendLine.length > 0 ? (
        <DragableTrendLine trendLine={trendLine} />
      ) : null}
      {crossHairLines.length > 0 ? (
        <CrossHair crossHairLines={crossHairLines} />
      ) : null}
      {/* <CSVReader
        className="CSVReader bg-dark"
        CSVDataHandler={CSVDataHandler}
        live={showLive}
      /> */}
    </div>
  );
};

export default CustomCandleChart;
