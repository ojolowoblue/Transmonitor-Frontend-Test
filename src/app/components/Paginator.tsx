import styled from "@emotion/styled";

export default function Paginator() {
  return (
    <PaginatorWrapper>
      <p>Showing 1 to 10 of 500 entries</p>

      <ButtonGroup>
        <button>Previous</button>
        <button className="active">1</button>
        <button>2</button>
        <button>Next</button>
      </ButtonGroup>
    </PaginatorWrapper>
  );
}

export const PaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 31px;

  p {
    color: #000000;
    font-size: 13px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  button {
    height: 29px;
    border: 1px solid #ced0da;
    border-radius: 2px;
    padding: 6px 8px;
    min-width: 31px;
    font-size: 13px;
    background: transparent;
  }

  button.active {
    background: #1875f0;
    color: #fff;
  }
`;
