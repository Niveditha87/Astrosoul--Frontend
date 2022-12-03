
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicNavbar from './components/Navigation/PublicNavbar';
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage";
import OTP from "./pages/OTPpage";
import Language  from './components/Language'
import Sidebar from "./components/Sidebar"
import AstrologerDetails from './components/AstrologerDetails'
import AstrologersList from "./pages/AstrologersPage"
import TodayHoroscope from "./components/TodayHoroscope"
import BookPanditjiForm from "./components/BookPanditjiForm"
import SelectPooja from './components/SelectPooja';
import KundliMatching from './components/KundliMatching'
import FreeKundli from './components/FreeKundli';
import TodayPanchang from './components/TodayPanchang';
import Festival from './components/Festival';
import Stones from './components/Stone'
import AstrologerRegistration from './components/AstrologerRegistrationn/AstrologerRegistration';
import AstrologerLogin from './components/AstrologerLogin';
function App() {
   
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/language" element={<Language />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/astrologerDetails" element={<AstrologerDetails />} />
        <Route path="/astrologers" element={<AstrologersList />} />
        <Route path="/todayHoroscope" element={<TodayHoroscope />} />
        <Route path="/bookPanditji" element={<BookPanditjiForm />} />
        <Route path="/selectPooja" element={<SelectPooja />} />
        <Route path="/kundliMatching" element={<KundliMatching />} />
        <Route path="/freeKundli" element={<FreeKundli />} />
        <Route path="/todayPanchang" element={<TodayPanchang />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/stones" element={<Stones />} />
        <Route
          path="/astrologerRegistration"
          element={<AstrologerRegistration />}
        />
        <Route
          path="/astrologerLogin"
          element={<AstrologerLogin />}
        />
      </Routes>
    </BrowserRouter>
    // <h1 className="text-8xl  font-bold underline ">Hello world!</h1>
  );
}

export default App;
