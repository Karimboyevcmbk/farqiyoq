import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/home/Home";
import AboutUs from "./Routes/aboutus/AboutUs";
import CreateYourPlan from "./Routes/createyourplan/CreateYourPlan";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {

  return (
      <div className='container'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/createyourplan" element={<CreateYourPlan/>}/>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
