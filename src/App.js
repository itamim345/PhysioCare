import './App.css';
import AboutMe from './own-comp/AboutMe/AboutMe';
import AboutPhysio from './own-comp/AboutPhysio/AboutPhysio';
import Banner from './own-comp/Banner/Banner';
import Contact from './own-comp/Contact/Contact';
import Footer from './own-comp/Footer/Footer';
import'./own-comp/Header/Header.css'
import Header from './own-comp/Header/Header.js'
import Services from './own-comp/Services/Services';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner/>
      <AboutPhysio />
      <Services/>
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
