import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layouts/Base";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>

        </Base>
      </BrowserRouter>

    </div>
  );
}

export default App;