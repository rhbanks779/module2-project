import React, { useState } from "react";

export default function MadlibsForm(props){

    
    return(
        <form>
             {props.createAllInputs}
             <button className="submit-button" >Enter</button>
            
            </form>
    )
}

//<input className="submit-button" type='submit' value={values} onSubmit={(e) => setValues(e.target.value)}>Submit</input>