import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db } from "./firebase.config";
import {getDocs} from firebase/firestore
import { useEffect } from "react";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/update/:email" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
