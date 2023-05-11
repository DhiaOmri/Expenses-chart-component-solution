import ChartContent from "./component/chartContent";
import TopChart from "./component/topChart";
import "./style/style.scss";
function App() {
  return (
    <div className="App">
      <main className="app-main">
        <TopChart></TopChart>
        <ChartContent></ChartContent>
      </main>
    </div>
  );
}

export default App;
