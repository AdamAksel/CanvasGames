import React, { useState } from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
  RulesTop,
} from './BreakoutRules.elements'
import Breakout from '../../Breakout/Breakout'

const BallsCanvasRules = () => {
  const [rules, setRules] = useState(true)
  return (
    <>
      {rules ? (
        <RulesArea>
          <RulesHalfArea>
            <RulesTop>Rules for Breakout</RulesTop>
            <ul>
              <li>Move with A and D</li>
              <li>Bounce ball at rectangles</li>
              <li>Don't let the ball touch the floor</li>
            </ul>

            <RulesTop>
              <RulesButton
                onClick={() => {
                  setRules(!rules)
                }}
              >
                <RulesText>Ready? Click Here</RulesText>
              </RulesButton>
            </RulesTop>
          </RulesHalfArea>
        </RulesArea>
      ) : (
        <Breakout />
      )}
    </>
  )
}

export default BallsCanvasRules
