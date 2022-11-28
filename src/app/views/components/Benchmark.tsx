import styled from "@emotion/styled";
import BenchmarkCards from "./BenchmarkCards";
import Chart from "./Chart";

export default function Benchmark() {
  return (
    <BenchMarkWrapper>
      <Chart />

      <BenchmarkCards />
    </BenchMarkWrapper>
  );
}

export const BenchMarkWrapper = styled.div`
  margin-top: 27px;
  display: grid;
  gap: 4px;
  grid-template-columns: 689px 1fr;
  background: #f7f8fa;
`;
