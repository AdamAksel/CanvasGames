import React from 'react'
import { GameContainer } from './Main.elements'
import BallsCanvas from '../BallsCanvas/BallsCanvas'

const Main = () => {
  return (
    <>
      <GameContainer>
        <BallsCanvas />
      </GameContainer>
    </>
  )
}

export default Main
