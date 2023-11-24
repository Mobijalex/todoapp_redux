import "./App.css";
import Create from "./Components/Create/Create";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
