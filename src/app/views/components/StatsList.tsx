import * as React from "react";
import styled from "@emotion/styled";

import { ReactComponent as SmallChart } from "app/assets/icons/small-chart.svg";

const stats: { name: string; amount: string }[] = [
  {
    name: "Daily Transaction Volume",
    amount: "2,342",
  },
  {
    name: "Daily Transaction Value",
    amount: "₦4,000,000",
  },
  {
    name: "Total Transaction Volume",
    amount: "452,000",
  },
  {
    name: "Total Transaction Value",
    amount: "₦4,000,000",
  },
];

export const Stat = ({ name, amount }: { name: string; amount: string }) => {
  return (
    <StatWrapper>
      <div>
        <small className="name">{name}</small>
        <p className="amount">{amount}</p>
      </div>

      <SmallChart />
    </StatWrapper>
  );
};

export default function StatsList() {
  return (
    <StatsWrapper>
      {stats.map((stat, idx) => (
        <Stat name={stat.name} amount={stat.amount} key={idx.toString()} />
      ))}
    </StatsWrapper>
  );
}

export const StatsWrapper = styled.div`
  display: flex;
  gap: 9px;
`;

export const StatWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: #ffffff;
  border: 1px solid #eef8fd;
  border-radius: 2px;

  .name {
    color: #787c90;
    font-size: 12px;
  }

  .amount {
    color: #262626;
    font-size: 18px;
  }
`;
