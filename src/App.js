import logo from './logo.svg';
import './App.css';
import Headnav from './component/Headnav';
import Frontsection from './component/Frontsection';
import Aboutme from './component/Aboutme';
import Services from './component/Services';
import Choose from './component/Choose';
import Client from './component/Client';
import Footer from './component/Footer';


function App(props) {
  return (
    <div className="App">
      <Headnav />
     < Frontsection/>
     <Aboutme/>
     <Services/>
     <Choose/>
     <Client/>
     <Footer/>
    </div>
  );
}

export default App;
