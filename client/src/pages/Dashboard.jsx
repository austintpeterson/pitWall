import Chart from "../components/Chart";
import { rpmData } from "../dummyData";

//https://recharts.org/en-US/examples

function Home() {
  return (
    <div className="dashboard">
      <Chart data={rpmData} title="RPM Over Time" grid dataKey="RPM" />
    </div>
  );
}
export default Home;
