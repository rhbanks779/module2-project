import Home from './Components/Home';
import Header from './Components/Header';
import Jokes from './Components/Jokes';
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
      <Route path='meme' element ={<Meme />} /> 
      <Route path='tenzies' element={<Tenzies />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


// import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './Home';
// import Nav from './Nav'
// import About from './About';
// import Contact from './Contact';
// import Search from './Search';

// import React, {useReducer} from 'react';



// function reducer(state,action){
// console.log("state:", state);
// console.log("action:", action);

// if(action.type==='add'){
//   return{
//     list:[...state.list,action.payload]
//   }
// }
// return state
// }

// function App() {

//   const [state,dispatch]= useReducer(reducer,'apple')
//   console.log(state);

//   return (
    



//     <BrowserRouter>
//       <div>

//         <p>{state}</p>

//         <button onClick={()=> dispatch('banana')}>change</button>
//         <button onClick={()=> dispatch ({type: 'add', payload: 'this'})}>payload</button>

//         <Nav/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='home' element={<Home/>}/>
//           <Route path='contact' element={<Contact/>}/>
//           <Route path='about' element={<About/>}/
