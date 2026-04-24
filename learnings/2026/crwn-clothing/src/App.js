import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./page/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/hats' element={<HatsPage />} />
        </Routes>
    </div>
  );
}

export default App;
