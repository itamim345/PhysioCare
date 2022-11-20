import './App.css';
import Home from './Pages/Home/Home';
import Header from './own-comp/Header/Header';
import Footer from './own-comp/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyServices from './Pages/MyServices/MyServices';
import BookingPage from './Pages/BookingPage/BookingPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import About from './Pages/About/About';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/services' element={<MyServices />} />
                    <Route path='/booking/:bookingId' element={<BookingPage />} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/checkout' element={
                        <RequireAuth>
                            <Checkout/>
                        </RequireAuth>
                    }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
