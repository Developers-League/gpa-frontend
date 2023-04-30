import './App.css';
// import Navbar from './components/navigation/Navbar';
import Homepage from './components/homepage/Homepage';
import Features from './components/features/Features';
// import About from './components/aboutpage/About';
import FgpaForm from './components/forms/FgpaForm';
import GcgpaForm from './components/forms/GcgpaForm';
import RgpaForm from './components/forms/RgpaForm';
import HLgpaForm from './components/forms/HLgpaForm';

function App(){
  return (
    <div className='app'>
      {/* <div className='nav'><Navbar/></div> */}
      <div className='home'><Homepage/></div>
      <div className='features'><Features/></div>
      {/* <div className='about'><About/></div> */}
      <div className='form-fgpa'><FgpaForm/></div>
      <div className='forms-gcgpa'><GcgpaForm/></div>
      <div className='forms-rgpa'><RgpaForm/></div>
      <div className='forms-hlgpa'><HLgpaForm/></div>


    </div>
  );
}

export default App;
