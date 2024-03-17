import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/SignIn/Login';
import Footer from './Pages/Footer/Footer';
import Experinces from './Pages/Experiences/Experinces';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className='appBody'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/experiences" element={<Experinces></Experinces>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/footer" element={<Footer></Footer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
