import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./Pages/Home";
import Detel from "./Pages/Detel";

function App() {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detel/:id" element={<Detel />} />
      </Routes>
    </Layouts>
  );
}

export default App;
