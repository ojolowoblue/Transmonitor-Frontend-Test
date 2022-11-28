import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
`;

export const TableEL = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;

  thead > tr {
    height: 42px;

    :first-of-type {
      background: #eaeef0;
    }
  }

  th {
    color: #7f8fa4;
    font-size: 14px;
    font-weight: 400;
    height: 42px;
    text-align: left;

    &:first-of-type {
      padding-left: 24px;
    }
    &:last-child {
      padding-right: 24px;
    }
  }
`;

export const TableRowEl = styled.tr`
  height: 70px;
  cursor: pointer;
  border-top: 1px solid #cccfd4;
  background-color: #fff;

  &:hover {
    background-color: #f7f9fa;
  }
  &:last-child td:first-of-type {
    border-bottom-left-radius: 8px;
  }
  &:last-child td:last-child {
    border-bottom-right-radius: 8px;
  }
`;

export const TableCellEl = styled.td`
  font-size: 14px;
  background-color: transparent;
  color: #7f8fa4;

  &:first-of-type {
    padding-left: 24px;
  }
  &:last-child {
    padding-right: 24px;
  }
`;
