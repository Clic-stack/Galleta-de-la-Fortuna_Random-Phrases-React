import { useState } from 'react'
import phrases from './components/data/phrases.json'
import { bg1, bg2, bg3, bg4 } from './assets/images'
import './App.css'
import Title from './components/Title'
import Quote from './components/Quote'
import FortuneButton from './components/FortuneButton'

const images = [ bg1, bg2, bg3, bg4 ]

function getRandomIndex (arr) {
  return Math.floor(Math.random() * arr.length)
  
}

function App() {
  const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase)
  const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)])

  const handleClick = () => {
    setPhrase(phrases[getRandomIndex(phrases)].phrase)
    setBgRandom(images[getRandomIndex(images)])
  }

  const bgStyle = `url('${bgRandom}')`

  return (
    <div className='wrapper' style ={{backgroundImage: bgStyle}}>
      <div className='container'>
      <Title />
      <Quote phrase={phrase} />
      <FortuneButton handleClick={handleClick} />
      </div>
    </div>
  )
}

export default App
