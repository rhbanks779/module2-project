import React, {useState, useEffect} from "react";
import TenzieDice from "./TenzieDice";

export default function Tenzies() {

const [dice, setDice] = useState(newDice())
const [tenz, setTenz] = useState(false)

useEffect(() => {
    const allHeld = dice.every(die => die.isHeld) //need to keep up with changing state/side effects
    const firstValue = dice[0].value
    const sameValues = dice.every(die => die.value === firstValue)
        if(allHeld && sameValues) {
            setTenz(true)
        }
}, [dice])

function generateNewDice(){
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: Math.ceil(Math.random() * 10000) //need to fix possible bug, adds dice if ids=
    }
}

function newDice(){
    const newDie = []
     for(let i=0; i<10; i++){
         newDie.push(generateNewDice())
     }
     return newDie
}


    function getDice(){
        setDice(priorDice => priorDice.map(die => {
            return die.isHeld ? die : generateNewDice()
        }))
        
        }
    


    function holdDice(id){
        setDice(priorDice => priorDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
    }
   
    const diceElements = dice.map(die => (
        <TenzieDice
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)} />
    ))

    return(
        <main className="tenzies-body">
            <h1 className="tenzie-title">Tenzies</h1>
            <p className="tenzie-directions">All dice must be the same. Roll until all the dice are the same. Click on dice to save value between rolls.</p>
            <div className="containers">{diceElements}          
            </div>
            
            <button className="roll-button" onClick={getDice}>{tenz ? "You Win!" : "Roll"}</button>
            
        </main>
    )
}


//{dice.map(die => <h2 key={die.id} className="dice">{die.value}</h2>)}