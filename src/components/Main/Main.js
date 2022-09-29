import React, { useState } from 'react'
import { GameContainer, NavContainer, NavArea, NavItem } from './Main.elements'
import BallsCanvas from '../BallsCanvas/BallsCanvas'
import BallsCanvasRules from '../Rules/BallsCanvasRules/BallsCanvasRules'
import Pong from '../Pong/Pong'
import PongRules from '../Rules/PongRules/PongRules'

const Main = () => {
  const [whatGame, setWhatGame] = useState(1)
  const [rules, setRules] = useState(true)

  return (
    <>
      <GameContainer>
        {whatGame === 0 && rules ? (
          <BallsCanvasRules setRules={setRules} rules={rules} />
        ) : whatGame === 0 ? (
          <BallsCanvas />
        ) : null}
        {whatGame === 1 && rules ? (
          <PongRules setRules={setRules} rules={rules} />
        ) : whatGame === 1 ? (
          <Pong />
        ) : null}
      </GameContainer>
      <NavContainer>
        <NavArea>
          <NavItem
            onClick={() => {
              setWhatGame(0)
            }}
          >
            Ball Survival
          </NavItem>
          <NavItem
            onClick={() => {
              setWhatGame(1)
            }}
          >
            Pong
          </NavItem>
          <NavItem>Future Game 1</NavItem>
          <NavItem>Future Game 2</NavItem>
        </NavArea>
      </NavContainer>
    </>
  )
}

export default Main
