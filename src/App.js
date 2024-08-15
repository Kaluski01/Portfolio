// import logo from './logo.svg';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/layouts';
import Hero from './components/Hero/Hero';
import Skills from './components/About/skills';
import Works from './components/Projects/Works';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route  element={<Hero/>}></Route>
        <Route path='skills' element= {<Skills/>} ></Route>
        <Route path='Works' element={<Works/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
