import './App.css';
import React from 'react';
import moment from 'moment';

function ListItem ({title}){
  return (
    <li>
      <div>
          {title} 
      </div>
    </li>
  )
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const min = 1;
const max = 100;

const answer = random(min, max)

function App() {
  const [history, setHistorys] = React.useState([])
  const [list, setList] = React.useState('')
  
  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      handleGuessNumber()
      console.log("Enter")
    }
  }

  const handleGuessNumber = () => {
    var guessanswer = parseInt(document.getElementById('guessans').value);
    console.log(answer, guessanswer)

    if (guessanswer !== "" && guessanswer <= 99 && guessanswer >= 1){
      if (answer > guessanswer){
        const newHistory = history.concat({
          title: moment().fromat('HH:mm:ss') + 'Guessed ' + list + ', it\'s less than the answer'
        })
        setHistorys(newHistory)
        setList('')
      } else if (answer < guessanswer){
        const newHistory = history.concat({
          title: 'Guessed ' + list + ', it\'s more than the answer'
        })
        setHistorys(newHistory)
        setList('')
      } else if (answer === guessanswer){
        const newHistory = history.concat({
          title: 'Guessed ' + list + ', it\'s equal than the answer'
        })
        setHistorys(newHistory)
        setList('')
        alert('Bingo');
      }
    } else {
      guessanswer = ''
      alert('Please enter 1 to 100');
    }
  }
  const handleCreateNewNumber = () => {
    window.location.reload()
  }
  const handleChange = (event) => {
    setList(event.target.value)
  }
  return (
    <div className="App">
      <h1 className="range">Range：1 ~ 100</h1>
      <div className="open">Page open：the generated answer is {answer}</div>
      <div>
        <input id="guessans" onChange={handleChange} onKeyDown={handleKeyDown} value={list} type="number" placeholder="Enter Number"/>
        <button className="guessbtn" onClick={handleGuessNumber} >GUESS</button>
        <button className="reset" onClick={handleCreateNewNumber}>RESET</button>
      </div>
      <ul>
        {
          history.map((todo, index) => {
            return (
              <ListItem 
                key={index}
                index={index}
                title={todo.title}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
