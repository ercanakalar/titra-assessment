import "./index.css";
import { Routes, Route } from "react-router-dom";
import MyMap from "./features/MyMap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyMap />} />
    </Routes>
  );
}

export default App;
