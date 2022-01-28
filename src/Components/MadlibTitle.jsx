import React, {useState} from "react";
import axios from "axios";

export default function MadlibTitle(){

    const [madlibs, setMadlibs] = useState([])
        

    const getMadlibTitle = () => {
        axios.get('http://madlibz.herokuapp.com/api/random')
         .then(response =>  {
           setMadlibs(response.data.title)
         })
    }

    const getTitle = () => {
        return madlibs.map((clue) => <label key={clue.id}>{clue}</label>)
       
    }

    getTitle()
    return(
        <div>
            <h1 className="mad-title">{getTitle()}</h1>
        </div>
    )
}