import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";


function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});
const inputIsValid = userInput.duration>=1;

function handleChange(inputIdentifier,newValue){
    setUserInput(prevInput=>{
    return {
        ...prevInput,
        [inputIdentifier]:+newValue
    }});
}
  return (
    <>
    <UserInput onChange={handleChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than 1.</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
