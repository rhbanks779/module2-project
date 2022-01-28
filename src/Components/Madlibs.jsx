import React, { useState } from "react";
import axios from "axios";
import UseMadlibs from "./UseMadlibs";
import MadlibsForm from "./MadlibsForm";
import MadlibTitle from "./MadlibTitle";

export default function Madlibs(){

    const [madlibs, setMadlibs] = useState([])
    const [values, setValues] = useState('') 
 

    const getMadlibs = () => {
        axios.get('http://madlibz.herokuapp.com/api/random')
         .then(response =>  {
           setMadlibs(response.data.blanks)
         })
    }

    const getBlanks = () => {
        return madlibs.map((clue) => <label key={clue.id}>{clue}</label>)
       
    }
    //console.log(madlibs)

    const createAllInputs= () => {
        return madlibs.map(mad => <input className="input-box" type='text'  key={mad.id} placeholder={mad} onChange={handleInputChange}></input>)
    }

    

    const handleInputChange = (event) =>{
       event.preventDefault()
        setValues({[event.value]: event.value })
        
    }

    //console.log(madlibs)
    // console.log(createAllInputs)
    // console.log(getMadlibs)
    console.log(values)

    //onChange={(e) => setValues(e.target.value)}
    return(
        <div>
            <button className="get-button" onClick={getMadlibs}>Get New Madlib</button>
            <MadlibTitle />
            <MadlibsForm getBlanks={getBlanks()} createAllInputs={createAllInputs()} />
           
           
        </div>
    )
}

//<UseMadlibs getBlanks={getBlanks()} />

//{madlibs.data.map(madlib => <input type='text' key={madlib.id}>{madlib.blanks}</input>)}

//<UseMadlibs madlibs={madlibs} getMadlibs={getMadlibs} />

// let inputs = []
//         for(let i=0; i< getBlanks().length; i++){
//             let blank = getBlanks();
//             inputs.push(<div><input className="input-box" type='text' key='blank.id' placeholder={madlibs[i]}></input></div>)
//         }
//         return inputs   used for create all inputs function