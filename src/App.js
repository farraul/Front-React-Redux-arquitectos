import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Registration from './Containers/Registration/Registration';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />



        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
