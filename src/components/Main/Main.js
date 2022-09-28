import React, { useState } from 'react'
import { GameContainer, NavContainer, NavArea, NavItem } from './Main.elements'
import BallsCanvas from '../BallsCanvas/BallsCanvas'
import BallsCanvasRules from '../Rules/BallsCanvasRules/BallsCanvasRules'

const Main = () => {
  const [whatGame, setWhatGame] = useState(0)
  const [rules, setRules] = useState(true)

  return (
    <>
      <GameContainer>
        {whatGame === 0 && rules ? (
          <BallsCanvasRules setRules={setRules} rules={rules} />
        ) : whatGame === 0 ? (
          <BallsCanvas />
        ) : null}
      </GameContainer>
      <NavContainer>
        <NavArea>
          <NavItem>Ball Survival</NavItem>
          <NavItem>Pong</NavItem>
          <NavItem>Future Game 1</NavItem>
          <NavItem>Future Game 2</NavItem>
        </NavArea>
      </NavContainer>
    </>
  )
}

export default Main
