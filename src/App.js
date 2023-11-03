import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
