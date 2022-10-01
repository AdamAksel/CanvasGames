import React from 'react'
import { GameContainer, NavContainer, NavArea, NavItem } from './Main.elements'
import BallsCanvasRules from '../Rules/BallsCanvasRules/BallsCanvasRules'
import PongRules from '../Rules/PongRules/PongRules'
import BreakoutRules from '../Rules/BreakoutRules/BreakoutRules'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()

  const refreshPage = () => {
    navigate(0)
  }

  return (
    <>
      <GameContainer>
        <Routes>
          <Route exact path='/Ballsurvival' element={<BallsCanvasRules />} />
          <Route exact path='/Pong' element={<PongRules />} />
          <Route exact path='/Breakout' element={<BreakoutRules />} />
        </Routes>
      </GameContainer>
      <NavContainer>
        <NavArea>
          <NavItem
            onClick={() => {
              refreshPage()
            }}
          >
            <Link to='/Ballsurvival'>Ball Survival</Link>
          </NavItem>

          <NavItem
            onClick={() => {
              refreshPage()
            }}
          >
            <Link to='/Pong'>Pong</Link>
          </NavItem>

          <NavItem
            onClick={() => {
              refreshPage()
            }}
          >
            <Link to='/Breakout'>Breakout</Link>
          </NavItem>
          <NavItem>Future Game 2</NavItem>
        </NavArea>
      </NavContainer>
    </>
  )
}

export default Main
