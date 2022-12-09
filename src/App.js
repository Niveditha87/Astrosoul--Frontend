
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicNavbar from './components/Navigation/PublicNavbar';
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage"
// import Register from "./pages/RegisterPage";
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
import UserProfile from './pages/UserProfilePage'
import Store from './components/Store';
import Pooja from './components/Puja';
import Products from './components/Products';
import Cart from './components/Cart'

import AstrologerHomePage from "./pages/AstrologerHomePage";
import AstrologerChat from "./components/AstrologerChat/AstrologerChat";
import UserChatForm from "./components/UserChatForm";
import LiveAstrologers from "./components/LiveAstrologers";
import AstrologerSidebar from "./components/Astrologer/AstrologerSidebar";
import Dashboard from "./components/Astrologer/Dashboard/Dashboard";
import CallChat from "./components/Astrologer/CallChat/CallChat";
import Callbackqueue from "./components/Astrologer/CallbackQueue/CallbackQueue";
import Wallet from "./components/Astrologer/Wallet/Wallet";
import KundaliHoroscope from './KundaliHoroscope';
import UsersideBar from './components/UserPanel/UsersideBar';
import DailyHoroscope from './components/UserPanel/DailyHoroscope/DailyHoroscope';
import MyWallet from './components/UserPanel/MyWallet/MyWallet';
import Address from './components/UserPanel/Address/Address';
import Members from './components/UserPanel/Members/Members';
import MyFavorites from './components/UserPanel/MyFavorites/MyFavorites';
import MyOrders from './components/UserPanel/MyOrders/MyOrders';
import  MySubscription from './components/UserPanel/MySubscription/MySubscription';
import CallChatHistory from './components/UserPanel/CallChatHistory/CallChatHistory';
import MyCallRequest from './components/UserPanel/MyCallRequest/MyCallRequest';
import MyReportList from './components/UserPanel/MyReportList/MyReportList';








function App() {
   
  return (
    <BrowserRouter>
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Register" element={<Register />} /> */}
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
        <Route path="/store" element={<Store />} />
        <Route path="/pooja" element={<Pooja />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/astrologerRegistration"
          element={<AstrologerRegistration />}
        />
        <Route path="/astrologerLogin" element={<AstrologerLogin />} />
        <Route path="/userProfile" element={<UserProfile />} />

        <Route path="/AstrologerHome" element={<AstrologerHomePage />} />
        <Route path="/astrochat" element={<AstrologerChat />} />
        <Route path="/userchatform" element={<UserChatForm />} />
        <Route path="/liveastrologer" element={<LiveAstrologers />} />
        <Route path="/astrologerSidebar" element={<AstrologerSidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/callchat" element={<CallChat />} />
        <Route path="/callbackqueue" element={<Callbackqueue />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/kundalihoroscope" element={<KundaliHoroscope  />} />
        <Route path='/usersidebar' element={<UsersideBar/>}/>
        <Route path='/dailyhoroscope' element={<DailyHoroscope/>}/>
        <Route path='/mywallet' element={<MyWallet/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/myfavorites' element={<MyFavorites/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/mysubscription' element={<MySubscription/>}/>
        <Route path='/callchathistory' element={<CallChatHistory/>}/>
        <Route path='/mycallrequest' element={<MyCallRequest/>}/>
        <Route path='/myreportlist' element={<MyReportList/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
