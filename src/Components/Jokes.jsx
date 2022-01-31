import React, {useState} from "react";
import axios from "axios";

export default function Jokes(){

    const [jokes, setJokes] = useState('')
    const [facts, setFacts] = useState('')
    const [excuses, setExcuses] = useState('')

    const getJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
         .then(response => {
             console.log(response)
             setJokes(response.data)
         })
    }
    
    const getFacts = () =>{
        axios.get('https://ffa.aakhilv.me/json')
         .then(response => {
             console.log(response)
             setFacts(response.data)
         })
    }

    const getExcuses =() => {
        axios.get('https://excuser.herokuapp.com/v1/excuse')
         .then(response => {
             console.log(response)
             setExcuses(response.data[0])
         })
        
    }

    return(
        
        <div className="jokes">
        <button className="joke-setup" onClick={() => getJoke()}>Prepare to Laugh! </button>
       <br></br><br></br><br></br>
        <img src={jokes.icon_url} alt="joke" className='jokeimage'/>
        <h2 className="joke-response" >{jokes.value}</h2>

        <br></br><br></br><br></br><br></br><br></br><br></br>
        <button className="joke-setup" onClick={() => getFacts()}>Click for Fun Facts!</button>
        <br></br><br></br>
        <h2 className="joke-response">{facts.text}</h2>

        <br></br><br></br><br></br><br></br><br></br><br></br>
        <button className="joke-setup" onClick={() => getExcuses()}>Click for Excuses!</button>
        <br></br><br></br>
        <h2 className="excuse-title">{excuses.category}</h2>
        <br></br>
        <h2 className="joke-response">{excuses.excuse}</h2>
        </div>
        
    )
}



        //  function getJokes() {
        //     fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
        //      "method": "GET",
        //      "headers": {
        //      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        //      "x-rapidapi-key": "af759bc287msh0a4df88d799003ap1e9b33jsn450221aa3de3"
        //             }
        //     })
        //      .then(response => response.json())
        //       .then(data => setJokes(data.body)) 
                          
        //     }
        //     console.log(jokes) 

      //  const [hide, setHide] = useState(false)  
           
    