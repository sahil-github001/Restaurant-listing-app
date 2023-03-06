import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restlist from './Components/Restlist';
import Viewrest from './Components/Viewrest';
import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
        <Header />
        <Routes>
          <Route path='/' element={<Restlist/>}/>
          <Route path='/viewrest/:id' element={<Viewrest/>}/>
        </Routes>
        <Footer />
    

    </div>
  );
}

export default App;
