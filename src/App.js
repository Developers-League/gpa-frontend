import './App.css';
// import Navbar from './components/navigation/Navbar';
import Homepage from './components/homepage/Homepage';
import Features from './components/features/Features';
// import About from './components/aboutpage/About';
import FgpaForm from './components/forms/FgpaForm';
import GcgpaForm from './components/forms/GcgpaForm';
import RgpaForm from './components/forms/RgpaForm';

function App(){
  return (
    <div className='app'>
      {/* <div className='nav'><Navbar/></div> */}
      <div className='home'><Homepage/></div>
      <div className='features'><Features/></div>
      {/* <div className='about'><About/></div> */}
      <div className='forms'><FgpaForm/></div>
      <div className='forms'><GcgpaForm/></div>
      <div className='forms'><RgpaForm/></div>

    </div>
  );
}

export default App;
