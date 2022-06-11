import React from "react";
import styles from "./Chart.module.css";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Chart = ({dataPokemon}) => {


  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles.title}>ABILITIES</h1>
      <div className={styles.chart}> 
        <BarChart
          width={500}
          height={300}
          data={dataPokemon}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="ability.name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="slot" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;