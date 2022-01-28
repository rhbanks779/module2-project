import Home from './Components/Home';
import Header from './Components/Header';
import Jokes from './Components/Jokes';
import Madlibs from './Components/Madlibs';
import Meme from './Components/MemeGenerator';
import Tenzies from './Components/Tenzies';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='home' element ={<Home />} />
      <Route path='jokes' element ={<Jokes />} />
      <Route path='madlibs' element={<Madlibs />} />
      <Route path='meme' element ={<Meme />} /> 
      <Route path='tenzies' element={<Tenzies />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
