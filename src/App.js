import './App.css';
import Home from './Pages/Home/Home';
import Header from './own-comp/Header/Header';
import Footer from './own-comp/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyServices from './Pages/MyServices/MyServices';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/services' element={<MyServices />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
