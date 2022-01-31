import React, {useEffect, useState} from "react"
import Header1 from "./MemeHeader"



export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
          .then(data => setAllMemes(data.data.memes))               
        }, []) 
    
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main className="main">
            <Header1 />
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                   <h2> Get a new image</h2> 
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="random-meme"className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

// useEffect(() => {
        
//         fetch("https://api.imgflip.com/get_memes")
//           .then(response => response.json())
//            .then(data => setAllMemes(data.data.memes))
               
//         }, []) 
    
    // useEffect(() => {
    //     axios.get("https://api.imgflip.com/get_memes")
    //        .then(data => {
    //            setAllMemes(data.data.memes) 
    //            console.log(data) 
    //        })                          
    // }, [])    
        