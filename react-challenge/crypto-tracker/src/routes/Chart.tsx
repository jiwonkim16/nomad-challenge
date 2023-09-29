import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 5000 }
  );
  return (
    <div>
      {isLoading ? (
        "Loading...chart"
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "sales",
              data: data?.map((item) => ({
                x: item.time_close,
                y: [
                  Number(item.open),
                  Number(item.high),
                  Number(item.low),
                  Number(item.close),
                ],
              })) as [],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              type: "candlestick",
            },
            title: {
              text: "CandleStick Chart",
              align: "left",
            },
            yaxis: {
              tooltip: {
                enabled: false,
              },
            },
            xaxis: {
              type: "datetime",
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
