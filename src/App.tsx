import { useState } from 'react'

import { Container } from './styles/page/Home'

import Control from './components/Control/index'

import Display from './components/Display/index'

import './App.css'

const App:React.FC =()=> {
  // const [count, setCount] = useState(0)

  return (
    <Container>
      <Display totalRepositories={repos.length}/>
      <Control/>
    </Container>
  )
}

export default App
