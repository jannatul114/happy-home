import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import Login from './Components/Authintications/Login/Login';
import Registar from './Components/Authintications/Register/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import DashBoard from './Components/Pages/DashBoard/DashBoard';
import NotFound from './Components/Shared/NotFound/NotFound';
import Profile from './Components/Pages/Profile/Profile';
import BookingList from './Components/Pages/DashBoard/BookingList';
import Review from './Components/Pages/DashBoard/Review';
import AddService from './Components/Pages/DashBoard/AddService';
import Manageservice from './Components/Pages/DashBoard/Manageservice';
import RequireAuth from './Components/Authintications/RequireAuth/RequireAuth';
import OrderList from './Components/Pages/DashBoard/OrderList';
import Book from './Components/Pages/DashBoard/Book';
import MakeAdmin from './Components/Pages/DashBoard/MakeAdmin';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Registar />}></Route>
        <Route path='/dashBoard' element={<RequireAuth><DashBoard /></RequireAuth>}></Route>
        <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>

        <Route path='/dashboard' element={<RequireAuth><DashBoard /></RequireAuth>}>
          <Route path="book" element={<Book />}></Route>
          <Route index path='bookingList' element={<BookingList />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='addService' element={<AddService />}></Route>
          <Route path='ManageService' element={<Manageservice />}></Route>
          <Route path='orderList' element={<OrderList />}></Route>
          <Route path='makeAdmin' element={<MakeAdmin />}></Route>
        </Route>


      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
