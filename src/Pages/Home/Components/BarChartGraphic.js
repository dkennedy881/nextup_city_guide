import React from 'react';
import {
    BarChart, Bar
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Page H', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page I', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page J', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page K', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page L', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page M', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page N', uv: 3490, pv: 4300, amt: 2100,
    },
];

const BarChartGraphic = () => {

    return (
        <BarChart width={window.innerWidth - 40} height={90} data={data}>
            <Bar dataKey="uv" fill="white" />
        </BarChart>
    );
}

export { BarChartGraphic }