import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
