
import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]
function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  function removeFirstElement(){
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter){
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }

  function addLetterToStart(letter){
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }

  function addLetterToEnd(letter) {
    setArray (currentArray => {
      return [...currentArray, letter]
    })
  }

  function reset(){
    setArray(INITIAL_VALUE)
  }

  function clear(){
    setArray([])
  }


  function updateAToH(){
    setArray(currentArray =>{
      return currentArray.map(element =>{
        if(element === "A") return "H"
        return element
      })
    })
  }

  return <div>
    <button onClick={removeFirstElement}>Remove first Element</button>
    <br />
    <br />
    <button onClick={() => removeSpecificLetter("B")}>remove all B's</button>
    <br />
    <br />
    <button onClick={() => addLetterToStart("T")}>addLetter to start</button>
    <br />
    <br />
    <button onClick={() => addLetterToEnd("Z")}>add letter to end</button>
    <br />
    <br />
    <button onClick={clear}>clear</button>
    <br />
    <button onClick={reset}>reset</button>
    <br />
    <br />
    <button onClick={updateAToH}>A to H</button>
    <br />
    {array.join(", ")}</div>
   
 

  }

export default App
