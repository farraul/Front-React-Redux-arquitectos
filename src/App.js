import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Registration from './Containers/Registration/Registration';
import Registration_user from './Containers/Registration/Registration_user/Registration_user';
import Registration_architect from './Containers/Registration/Registration_architect/Registration_architect';


import Architects from './Containers/Architects/Architects';
import Admin_menu_comp from './Components/Admin_menu_comp/Admin_menu_comp';

import Admin_offers from './Containers/Admin/Admin_offers/Admin_offers';
import Admin_home from './Containers/Admin/Admin_home/Admin_home';
import Admin_profile from './Containers/Admin/Admin_profile/Admin_profile';

import Super_admin from './Containers/Super_admin/Super_admin';
import Super_admin_home from './Containers/Super_admin/super_admin_home/super_admin_home';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registration/>} />
          <Route path="/registro-usuarios" element={<Registration_user/>} />
          <Route path="/registro-arquitectos" element={<Registration_architect/>} />

          <Route path="/arquitectos" element={<Architects/>} />

          <Route path="/admin" element={<Admin_home/>} />
          <Route path="/admin-menu_comp" element={<Admin_menu_comp/>} />
          <Route path="/admin-offers" element={<Admin_offers/>} />
          <Route path="/admin-profile" element={<Admin_profile/>} />

          <Route path="/super-admin" element={<Super_admin/>} />
          <Route path="/super-admin-home" element={<Super_admin_home/>} />
         

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
