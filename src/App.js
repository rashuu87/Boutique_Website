import './App.css';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>

    <Header/>
   <Routes>

    <Route path='/' element = {<Dashboard/>}/>
    <Route path='/Contact' element = {<ContactUs/>}/>
    <Route path='/About' element = {<About/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>

  );
}

export default App;
