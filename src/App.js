import "./App.css";
import ExReducer from "./components/ExReducer";
import HookComp from "./components/HookComp";
import ReducerComp2 from "./components/ReducerComp2";
import ReduserComp from "./components/ReduserComp";

function App() {
  return (
    <div className="App">
      <HookComp />
      <ReduserComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

export default App;
