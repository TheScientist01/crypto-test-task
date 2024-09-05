"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
}

const CryptoChart: React.FC = () => {
  const [candles, setCandles] = useState<Candle[]>([]);
  const [isTapped, setIsTapped] = useState<boolean>(false);
  const [lastPrice, setLastPrice] = useState<number>(100);

  useEffect(() => {
    const interval = setInterval(() => {
      generateNewCandle();
    }, 10000);

    return () => clearInterval(interval);
  }, [isTapped, lastPrice]);

  const generateNewCandle = () => {
    const open = lastPrice;
    const close = isTapped
      ? open + Math.random() * 5
      : open - Math.random() * 5;
    const high = Math.max(open, close) + Math.random() * 2;
    const low = Math.min(open, close) - Math.random() * 2;
    const newCandle: Candle = { open, close, high, low };
    setCandles((prevCandles) => [...prevCandles, newCandle]);
    setLastPrice(close);
  };

  // Handle tap events
  const handleTap = () => {
    setIsTapped(true);
  };
  const handleUntap = () => setIsTapped(false);
  useEffect(() => {
    const initialCandles: Candle[] = [];
    let price = Math.random() * 100 + 50;

    for (let i = 0; i < 9; i++) {
      const open = price;
      const close = open + (Math.random() * 6 - 3);
      const high = Math.max(open, close) + Math.random() * 2;
      const low = Math.min(open, close) - Math.random() * 2;
      price = close;

      initialCandles.push({
        open: open < 0 ? 0 : open,
        close: close < 0 ? 0 : close,
        high: high < 0 ? 0 : high,
        low: low < 0 ? 0 : low,
      });
    }

    setCandles(initialCandles);
    setLastPrice(initialCandles[initialCandles.length - 1].close);
  }, []);

  return (
    <div
      style={{ fontFamily: "Helvetica" }}
      className="flex min-h-[100vh] bg-white"
    >
      <div className="hidden md:block w-[350px] py-9 pl-9 relative">
        <Link href={"/"} className="text-[27px] text-black font-semibold mb-5 ">
          CryptoKraken
        </Link>
      </div>
      <div className="relative flex bg-gray-100 pt-[135px] pb-3 w-[99%] m-4 rounded-[25px] shadow-black shadow-[-10px_10px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="absolute top-0 h-[40vh] w-full rounded-t-[25px] bg-black">
          <div className="flex justify-between text-[15px] text-white w-[85%] mx-auto my-9">
            <div className="rounded-md bg-[#2E2E2E] font-semibold text-sm py-2 px-5">
              Chart
            </div>
          </div>
          <div
            onMouseDown={handleTap}
            onMouseUp={handleUntap}
            className="flex justify-center items-center mx-auto w-[90%] [&>div]:w-full [&>div]:rounded-lg [&>div>div>svg]:rounded-xl"
          >
            <Chart
              height={700}
              width="100%"
              type="candlestick"
              options={{
                chart: {
                  type: "candlestick",
                  background: "#292929",
                  zoom: { enabled: false },
                  animations: { enabled: false },
                },
                grid: {
                  show: true,
                  xaxis: {
                    lines: {
                      show: true,
                    },
                  },
                  yaxis: {
                    lines: {
                      show: true,
                    },
                  },
                },
                xaxis: {
                  type: "numeric",
                  labels: { style: { colors: "white" } },
                  min: candles.length > 10 ? candles.length - 10 : 0, // Show last 10 candles initially
                  max: candles.length,
                },
                yaxis: {
                  labels: {
                    formatter: (val) => val.toFixed(2),
                    style: { colors: "white" },
                  },
                },
                tooltip: { enabled: false },
              }}
              series={[
                {
                  data: candles.map((candle, index) => ({
                    x: index, // Each candle represents a 10-second period
                    y: [candle.open, candle.high, candle.low, candle.close],
                  })),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;
