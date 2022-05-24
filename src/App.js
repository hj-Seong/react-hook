import "./App.css";
import ExReducer from "./components/ExReducer";
import HookComp from "./components/HookComp";
import MemoHook from "./components/MemoHook";
import ReducerComp2 from "./components/ReducerComp2";
import ReduserComp from "./components/ReduserComp";

function App() {
  return (
    <div className="App">
      <MemoHook />
      <HookComp />
      <ReduserComp />
      <ReducerComp2 />
      <ExReducer />
    </div>
  );
}

export default App;
