import React, { useState } from "react";
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
import UpperPanel from "../upperPanel";
import { Button, Dropdown, Menu } from "antd";

import { DownOutlined } from "@ant-design/icons";

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
    Year: 50,
    amt: 200,
  },
  {
    name: "Mar 2021",
    Period: 150,
    Actuals: 220,
    amt: 200,
    Year: 80,
  },
  {
    name: "Mar 2021",
    Period: 450,
    Actuals: 160,
    amt: 200,
    Year: 20,
  },
  {
    name: "Mar 2021",
    Period: 100,
    Actuals: 150,
    amt: 200,
    Year: 450,
  },
];

const AdminChart = () => {
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
        <DatePicker />
        <Button>Reset</Button>
      </div>
    </div>
  );

  return (
    <StyledDiv>
      {/* <UpperPanel /> */}
      <PeriodDiv>
        <StatusDiv>
          <StatusPara>[Forecast vs. Actuals]</StatusPara>
        </StatusDiv>
        <LabelDiv>
          <StyledPara>Period: </StyledPara>
          {/* <Button onClick={handleClick}>Add</Button>
          {show === true ? <div>Show</div> : null} */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Select Date <DownOutlined />
            </a>
          </Dropdown>
        </LabelDiv>
      </PeriodDiv>
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
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Actuals"
          stroke="#74d5e9"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Period" stroke="#ff8cae" />
        <Line type="monotone" dataKey="Year" stroke="#66b9fa" />
      </LineChart>
    </StyledDiv>
  );
};

export default AdminChart;

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
