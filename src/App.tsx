import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./Pages/Home";
import Detel from "./Pages/Detel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./Pages/User";

function App() {
  return (
    <Layouts>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detel/:id" element={<Detel />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Layouts>
  );
}

export default App;
