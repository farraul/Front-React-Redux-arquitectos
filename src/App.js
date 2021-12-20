import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Registration from './Containers/Registration/Registration';
import Architects from './Containers/Architects/Architects';
import Admin_menu_comp from './Components/Admin_menu_comp/Admin_menu_comp';

import Admin_offers from './Containers/Admin/Admin_offers/Admin_offers';
import Admin_home from './Containers/Admin/Admin_home/Admin_home';
import Admin_profile from './Containers/Admin/Admin_profile/Admin_profile';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registration/>} />
          <Route path="/arquitectos" element={<Architects/>} />

          <Route path="/admin-home" element={<Admin_home/>} />
          <Route path="/admin-menu_comp" element={<Admin_menu_comp/>} />
          <Route path="/admin-offers" element={<Admin_offers/>} />
          <Route path="/admin-profile" element={<Admin_profile/>} />
         

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
