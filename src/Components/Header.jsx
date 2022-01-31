import React from "react";
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav id='head'  >
           <h1 className="mainTitle">The Sandlot</h1>
        
        <ul className='headBar'>
            <Link to='home'>
            <li className="home">Home</li>
            </Link>
              
            <Link to='jokes'>
            <li className="joke">Jokes</li>
            </Link>

            <Link to='meme'>
            <li className='meme'>Memes</li>
            </Link>

            <Link to='tenzies'>
            <li className="tenzies">Tenzies</li>
            </Link>
        </ul>
        </nav>
    )
}