import { useState } from 'react'

import { Container } from './styles/page/Home'

import Control from './components/Control/index'

import Display from './components/Display'

import './App.css'

const App:React.FC =()=> {
  // const [count, setCount] = useState(0)

  return (
    <Container>
      <Display/>
      <Control/>
    </Container>
  )
}

export default App
