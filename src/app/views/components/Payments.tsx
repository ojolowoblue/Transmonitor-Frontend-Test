import * as React from "react";
import styled from "@emotion/styled";

import Table from "app/components/Table";
import { ReactComponent as ArrowDown } from "app/assets/icons/dropdown-icon.svg";
import { ReactComponent as BigArrowDown } from "app/assets/icons/big-arrow-down.svg";
import { ReactComponent as Search } from "app/assets/icons/search.svg";
import Paginator from "app/components/Paginator";

interface Options {
  label: string;
  value: string;
}

interface SelectFilterProps {
  options: Options[];
}

const options: Options[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Reconciled",
    value: "reconciled",
  },
  {
    label: "Un-reconciled",
    value: "unreconciled",
  },
  {
    label: "Settled",
    value: "settled",
  },
  {
    label: "Unsettled",
    value: "unsettled",
  },
];

const SelectFilter = ({ options }: SelectFilterProps) => {
  const [value, setValue] = React.useState(options[0]);
  const [showOptions, setShowOptions] = React.useState(false);

  return (
    <SelectWrapper>
      <SelectHeader onClick={() => setShowOptions((prev) => !prev)}>
        <span>{value.label}</span> <ArrowDown />
      </SelectHeader>

      {showOptions && (
        <OptionsBox>
          {options.map((option, idx) => (
            <Option
              key={idx.toString()}
              onClick={() => {
                setValue(option);
                setShowOptions((prev) => !prev);
              }}
            >
              {option.label}
            </Option>
          ))}
        </OptionsBox>
      )}
    </SelectWrapper>
  );
};

const PaymentFilter = () => {
  return (
    <FilterWrapper>
      <div className="searchFilter">
        <p>
          Showing
          <span>
            20 <ArrowDown stroke="#1875F0" />
          </span>
          out of 500 payments
        </p>

        <TableSearch>
          <Search />
          <SearchInput placeholder="Search payments" />
        </TableSearch>
      </div>

      <SelectContainer className="selectFilter">
        <p>Show</p>

        <SelectFilter options={options} />
      </SelectContainer>
    </FilterWrapper>
  );
};

export const PaymentList = () => {
  return (
    <Table
      headings={[
        { content: "Item Type" },
        { content: "Price" },
        { content: "Transaction No" },
        { content: "Time" },
        { content: "Status" },
        { content: "" },
      ]}
    >
      {Array(9)
        .fill("")
        .map((i, idx) => (
          <Table.Row key={idx.toString()} className="table-item">
            <Table.Cell>
              <ItemType>
                <Avatar>VW</Avatar>
                <span>Apple Mac Book 15” 250 SSD 12GB</span>
              </ItemType>
            </Table.Cell>
            <Table.Cell width={110}>$73430</Table.Cell>
            <Table.Cell>1234567890</Table.Cell>
            <Table.Cell width={100}>12:30</Table.Cell>
            <Table.Cell>
              <Badge>
                <span className="circle"></span> Reconcilled
              </Badge>
            </Table.Cell>
            <Table.Cell>
              <BigArrowDown />
            </Table.Cell>
          </Table.Row>
        ))}
    </Table>
  );
};

export default function Payments() {
  return (
    <div>
      <PaymentTitle>Payments</PaymentTitle>
      <PaymentFilter />
      <PaymentList />
      <Paginator />
    </div>
  );
}

export const PaymentTitle = styled.h2`
  margin-top: 40px;
  font-weight: 400;
  font-size: 36px;
  color: #262626;
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #7f8fa4;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const ItemType = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 136px 22px 0;

  .searchFilter,
  .selectFilter {
    display: flex;
    align-items: center;
  }

  p {
    font-size: 13px;
    color: #262626;

    span {
      color: #1875f0;
      padding: 0 20px;
    }
  }
`;

export const TableSearch = styled.div`
  margin-left: 57px;

  svg {
    margin-right: -10px;
  }
`;

export const SearchInput = styled.input`
  padding: 0 20px;
  width: 336px;
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 0.5px solid #787878;
  background: transparent;

  ::placeholder {
    font-size: 11px;
    color: #787878;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 150px;
`;

export const SelectContainer = styled.div`
  gap: 16px;
`;

export const SelectHeader = styled.button`
  cursor: pointer;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border: 1px solid #ced0da;

  background: #f7f8fa;
`;

export const OptionsBox = styled.div`
  position: absolute;
  width: 150px;
  background: #fff;
`;

export const Option = styled.div`
  font-size: 13px;
  color: #414042;
  background: #fff;
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    background: #f4f4f4;
  }
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;

  span.circle {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #27ae60;
  }

  width: 120px;
  height: 33px;
  border: 1px solid #cccfd4;
  border-radius: 30px;
  color: #27ae60;
`;
