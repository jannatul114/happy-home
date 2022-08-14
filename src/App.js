import './App.css';
import Banner from './Components/Pages/Home/Banner';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/Authintications/Login/Login';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
