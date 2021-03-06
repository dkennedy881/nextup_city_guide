import React, { useEffect, useState } from "react";
import { BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page L",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page M",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page N",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartGraphic = () => {
  const [doShow, setDoShow] = useState(false);
  const [graphHeight, setGraphHeight] = useState(100);
  const [graphWidthSub, setGraphWidthSub] = useState(60);

  useEffect(() => {
    if (!doShow) {
      setTimeout(() => {
        if (window.innerWidth >= 768) {
          if (window.innerWidth >= 1025) {
            setGraphHeight(250);
            setGraphWidthSub(650);
          } else {
            setGraphHeight(200);
            setGraphWidthSub(150);
          }
        }
        setDoShow(true);
      }, 600);
    }
  }, []);

  if (doShow) {
    return (
      <BarChart
        width={window.innerWidth - graphWidthSub}
        height={graphHeight}
        data={data}
      >
        <Bar dataKey="uv" fill="white" />
      </BarChart>
    );
  } else {
    return <></>;
  }
};

export { BarChartGraphic };
