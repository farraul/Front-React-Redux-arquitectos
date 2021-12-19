import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Registration from './Containers/Registration/Registration';
import Architects from './Containers/Architects/Architects';
import Admin_home from './Containers/Admin/Admin_home/Admin_home';
import Admin_menu_comp from './Components/Admin_menu_comp/Admin_menu_comp';





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

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
