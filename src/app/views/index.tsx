import DashboardWrapper from "app/components/DashboardWrapper";

import Benchmark from "./components/Benchmark";
import Payments from "./components/Payments";
import StatsList from "./components/StatsList";

function App() {
  return (
    <div className="App">
      <DashboardWrapper>
        <StatsList />

        <Benchmark />

        <Payments />
      </DashboardWrapper>
    </div>
  );
}

export default App;
