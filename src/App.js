import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar';
import Joke from './components/Joke';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>                  
             <Route path='/' element={ <Home /> }></Route>
             <Route path='About' element={<About />}></Route>
             <Route path='Joke' element={<Joke />}></Route>
        </Routes>
    </>
      
  );
}

export default App;
