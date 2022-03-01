import './App.css';
import React from 'react';

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
  
  const handleCreateTodo = () => {
    var guessanswer = parseInt(document.getElementById('guessans').value);
    console.log(answer, guessanswer)

    if (guessanswer !== "" && guessanswer <= 99 && guessanswer >= 1){
      if (answer > guessanswer){
        const newHistory = history.concat({
          title: 'Guessed ' + list + ', it\'s less than the answer'
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
      }
    } else {
      const newHistory = history.concat({
        title: 'Guessed ' + list + ', the answer is between ' + min + 'and' + max
      })
      setHistorys(newHistory)
      setList('')
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
      <div className="open">Page open: the generated answer is {answer}</div>
      <ul style={{listStyle: 'decimal'}}>
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
      <input id="guessans" onChange={handleChange} value={list} type="text"/>
      <button className="guessbtn" onClick={handleCreateTodo}>GUESS</button>
      <button className="reset" onClick={handleCreateNewNumber}>重設</button>
    </div>
  );
}

export default App;
