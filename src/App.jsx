import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import { useState } from "react"


function App() {
  const [input, setInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = input.duration >= 1;
  function handleChange(inputIdentifier, value) {
    setInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +value
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onHandleChange={handleChange} input={input} />
      {!inputIsValid && <p className="center">Please enter the duration Greater than zero!</p>}
      {inputIsValid && <Results userInput={input} />}
    </>
  )
}

export default App
