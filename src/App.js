
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicNavbar from './components/Navigation/PublicNavbar';
import Home from "./pages/Home";
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    // <h1 className="text-8xl  font-bold underline ">Hello world!</h1>
  );
}

export default App;
