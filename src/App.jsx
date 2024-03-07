import { useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([
    {
      id: 1,
      joke: 'What do you call a very small valentine? A valen-tiny!!!',
      rate: 0
    },
    {
      id: 2,
      joke: 'What did the dog say when he rubbed his tail on the sandpaper? Ruff, Ruff!!!',
      rate: 5
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    setJokes([...jokes, { id: jokes.length + 1, joke: e.target[0].value, rate: 0 }])
    // const newJoke = {
    //   id: jokes.length + 1,
    //   joke: e.target[0].value,
    //   rate: 0
    // }
    // setJokes([...jokes, newJoke]);
    e.target[0].value = '';

  }
  const updateJoke = (jokeId, rating) => {
    const newJoke = jokes.map((item) => {
      if (item.id == jokeId) {
        return { ...item, rate: rating }
      }
      return item;
    })
    setJokes(newJoke)
  }
  return (
    <div className='container'>
      <h2>Jokes For You 😂</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" placeholder='Add joke' />
        <button type="submit">AddJoke</button>
      </form>
      <div className="jokes">
        {
          jokes && jokes.sort((a, b) => (a.rate - b.rate)).map((joke) => {
            return (
              <div key={joke.id} className='joke'>
                <div className="joke-text">{joke.joke}</div>
                <div className="rate">Rating : {joke.rate}</div>
                <div className="joke-buttons">
                  <button onClick={() => updateJoke(joke.id, joke.rate + 1)}>👍
                  </button>
                  <button onClick={() => updateJoke(joke.id, joke.rate - 1)}>👎
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
