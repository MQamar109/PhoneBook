import logo from "./logo.svg";
import Form from "./components/Form";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/new" element={<Form />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
