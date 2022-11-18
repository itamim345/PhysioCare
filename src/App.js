import './App.css';
import AboutPhysio from './own-comp/AboutPhysio/AboutPhysio';
import Banner from './own-comp/Banner/Banner';
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
    </div>
  );
}

export default App;