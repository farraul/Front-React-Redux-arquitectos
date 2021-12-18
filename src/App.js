import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
