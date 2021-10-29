import React from "react";
import "./styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "../datePicker";

import styled from "styled-components";

const data = [
  {
    name: "Oct 2020",
    Period: 100,
    Actuals: 0,
    amt: 200,
  },
  {
    name: "Nov 2020",
    Period: 240,
    Actuals: 180,
    amt: 200,
  },
  {
    name: "Nov 2020",
    Period: 100,
    Actuals: 100,
    amt: 200,
  },
  {
    name: "Nov 2020",
    Period: 120,
    Actuals: 220,
    amt: 200,
  },
  {
    name: "Dec 2020",
    Period: 300,
    Actuals: 230,
    amt: 200,
  },
  {
    name: "Dec 2020",
    Period: 440,
    Actuals: 440,
    amt: 200,
  },
  {
    name: "Dec 2020",
    Period: 440,
    Actuals: 420,
    amt: 200,
  },
  {
    name: "Jan 2021",
    Period: 430,
    Actuals: 430,
    amt: 200,
  },
  {
    name: "Jan 2021",
    Period: 320,
    Actuals: 380,
    amt: 200,
  },
  {
    name: "Jan 2021",
    Period: 240,
    Actuals: 580,
    amt: 200,
  },
  {
    name: "Feb 2021",
    Period: 160,
    Actuals: 380,
    amt: 200,
  },
  {
    name: "Feb 2021",
    Period: 225,
    Actuals: 200,
    amt: 200,
  },
  {
    name: "Feb 2021",
    Period: 230,
    Actuals: 220,
    amt: 200,
  },
  {
    name: "Mar 2021",
    Period: 150,
    Actuals: 220,
    amt: 200,
  },
  {
    name: "Mar 2021",
    Period: 450,
    Actuals: 160,
    amt: 200,
  },
  {
    name: "Mar 2021",
    Period: 100,
    Actuals: 150,
    amt: 200,
  },
];

const AdminChart = () => {
  return (
    <>
      <PeriodDiv>
        <LabelDiv>
          <StyledPara>Period: </StyledPara>
        </LabelDiv>
        <DatePicker />
      </PeriodDiv>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Actuals"
          stroke="#74d5e9"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Period" stroke="#ff8cae" />
      </LineChart>
    </>
  );
};

export default AdminChart;

const PeriodDiv = styled.div`
  display: flex;
  justify-content: right;
  padding: 10px;
`;

const LabelDiv = styled.div`
  display: flex;
  text-align: center;
`;

const StyledPara = styled.p`
  margin: 10px !important;
`;
