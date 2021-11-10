import React, { useState } from "react";
// import "./styles.css";
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
import { Button, Dropdown, Menu } from "antd";

import { DownOutlined } from "@ant-design/icons";

import styled from "styled-components";

const data = [
  {
    name: "10-21",
    Year: 0.7,
  },
  {
    name: "11-21",
    Year: 1,
  },
  {
    name: "12-21",
    Year: 2,
  },
  {
    name: "01-22",
    Year: 1.7,
  },
  {
    name: "02-22",
    Year: 0.6,
  },
  {
    name: "03-22",
    Year: 0.4,
  },
  {
    name: "04-22",
    Year: 2.3,
  },
  {
    name: "05-22",
    Year: 5,
  },
  {
    name: "06-22",
    Year: 1,
  },
  {
    name: "07-22",
    Year: 3,
  },
  {
    name: "11-21",
    Year: 2.5,
  },
  {
    name: "12-21",
    Year: 3,
  },
];

const DriversChart = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked");
    setShow(true);
    if (show === true) setShow(false);
  };

  const menu = (
    // <Menu>
    //   <Menu.Item key="0">
    //     <a href="https://www.antgroup.com">1st menu item</a>
    //   </Menu.Item>
    //   <Menu.Item key="1">
    //     <a href="https://www.aliyun.com">2nd menu item</a>
    //   </Menu.Item>
    //   <Menu.Divider />
    //   <Menu.Item key="3">3rd menu item</Menu.Item>
    // </Menu>
    <div
      style={
        {
          // width: "520px",
          // display: "flex",
          // justifyContent: "start",
        }
      }
    >
      <div
        style={{
          border: "1px solid #000",
          width: "512px",
          display: "flex",
          justifyContent: "space-between",
          background: "#fff",
          padding: "20px",
        }}
      >
        {/* <DatePicker /> */}
        <Button>Reset</Button>
      </div>
    </div>
  );

  return (
    <StyledDiv>
      {/* <UpperPanel /> */}
      <LineChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          vertical={false}
          //  strokeDasharray="3"
          strokeDashoffset="3"
          strokeWidth={1}
        />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        {/* <Line
          type="monotone"
          dataKey="Actuals"
          stroke="#74d5e9"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Period" stroke="#ff8cae" /> */}
        <Line type="monotone" dataKey="Year" stroke="#66b9fa" />
      </LineChart>
    </StyledDiv>
  );
};

export default DriversChart;

const StyledDiv = styled.div`
  p {
    margin-top: 14px !important;
    margin-bottom: none !important;
  }
  .recharts-tooltip-label {
    margin-top: 0px !important;
  }
`;

const PeriodDiv = styled.div`
  display: flex !important;
  padding: 10px 0 0 20px !important;
`;

const LabelDiv = styled.div`
  display: flex !important;
  width: 80% !important;
  justify-content: end;
`;

const StatusDiv = styled.div``;

const StyledPara = styled.p`
  margin-right: 20px;
`;

const StatusPara = styled.p`
  font-weight: bolder !important;
  font-size: 12px !important;
`;
