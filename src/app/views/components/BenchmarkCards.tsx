import styled from "@emotion/styled";

export default function BenchmarkCards() {
  return (
    <CardsWrapper>
      <CardWrapper>
        <h3 className="cardTitle">Orders</h3>
        <div className="progress">
          <span className="progressInner"></span>
        </div>

        <p>
          Pending Orders: <span className="yellow">20</span>
        </p>
        <p>
          Reconcilled Orders: <span className="green">80</span>
        </p>
        <p>
          Total Orders: <span className="blue">100</span>
        </p>
      </CardWrapper>

      <CardWrapper>
        <h3 className="cardTitle">Payments</h3>
        <div className="progress">
          <span className="progressInner"></span>
        </div>

        <p>
          Un-reconcilled Payments: <span className="yellow">20</span>
        </p>
        <p>
          Reconcilled Payments: <span className="green">80</span>
        </p>
        <p>
          Total Payments: <span className="blue">100</span>
        </p>
      </CardWrapper>
    </CardsWrapper>
  );
}

export const CardsWrapper = styled.div`
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardWrapper = styled.div`
  background: #fff;
  padding: 21px 47px 24px 25px;

  .cardTitle {
    font-size: 14px;
    color: #262626;
  }

  .progress {
    margin: 11px 0;
    position: relative;
    width: 100%;
    height: 4px;
    background: #fdc203;

    span {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 90%;
      background: #27ae60;
    }
  }

  p {
    color: #262626;
    font-size: 14px;
    margin-bottom: 10px;

    span {
      font-weight: bold;

      &.yellow {
        color: #ebc315;
      }

      &.green {
        color: #27ae60;
      }

      &.blue {
        color: #1860ec;
      }
    }
  }
`;
