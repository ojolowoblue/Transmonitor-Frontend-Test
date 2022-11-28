import styled from "@emotion/styled";
import {
  ResponsiveContainer,
  AreaChart,
  Scatter,
  CartesianGrid,
  Area,
  Line,
} from "recharts";

import { ReactComponent as DropdownIcon } from "app/assets/icons/dropdown-icon.svg";
import { ReactComponent as ArrowLeft } from "app/assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "app/assets/icons/arrow-right.svg";

import { data } from "../utils";

export default function Chart() {
  return (
    <ChartWrapper>
      <ChartHeader>
        <h2 className="date">Today: 5, Aug 2018</h2>

        <div className="buttonGroup">
          <DateButton>
            <span>1 Jan - 1 Jun</span>
            <DropdownIcon />
          </DateButton>

          <div>
            <ArrowButton>
              <ArrowLeft />
            </ArrowButton>

            <ArrowButton>
              <ArrowRight />
            </ArrowButton>
          </div>
        </div>
      </ChartHeader>

      <DayFilter>
        {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((day, idx) => (
          <p key={idx.toString()}>{day}</p>
        ))}
      </DayFilter>

      <ResponsiveContainer width="100%" height={160}>
        <AreaChart
          key={Math.random()}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff" stopOpacity={0.01} />
              <stop offset="5%" stopColor="#fff" stopOpacity={0.01} />
            </linearGradient>
            <linearGradient id="colorIndustry" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#0294FF" stopOpacity="2" />
              <stop offset="1" stopColor="white" stopOpacity="0.01" />
            </linearGradient>
          </defs>

          <Scatter data={data?.reverse()}></Scatter>

          <CartesianGrid
            strokeDasharray="2 6"
            stroke="rgba(255, 255, 255, 0.5)"
            vertical={false}
          />

          <Area
            type="linear"
            isAnimationActive={true}
            dataKey="amt"
            stroke="#0294FF"
            fillOpacity={0.4}
            fill="url(#colorIndustry)"
            strokeWidth={1}
          />

          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="name"
            stroke="#FFC105"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export const ChartWrapper = styled.div`
  width: 100%;
  padding-top: 26px;
  background: #fff;
`;

export const ChartHeader = styled.div`
  padding: 0 30px 0 34px;
  display: flex;
  justify-content: space-between;

  .date {
    font-size: 18px;
    line-height: 21px;
    color: #4f4f4f;
  }

  .buttonGroup {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;

export const DayFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px;
  font-size: 14px;
  color: #000000;
  font-weight: bold;
`;

export const DateButton = styled.button`
  width: 138px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 31px;
  border: 1px solid #dde0e3;
  border-radius: 4.25px;
  color: #7f8fa4;
  font-size: 12px;
  background: transparent;
  padding: 0 10px;
  padding-right: 13px;
`;

export const ArrowButton = styled.button`
  width: 29.36px;
  height: 22.97px;
  background: linear-gradient(0deg, #f2f4f7 0%, #ffffff 100%);
  border: 1px solid #ced0da;
  border-radius: 4px;

  :first-of-type {
    margin-right: 13px;
  }
`;
