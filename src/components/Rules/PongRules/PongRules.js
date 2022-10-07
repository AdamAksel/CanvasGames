import React, { useState } from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
  RulesTop,
} from './PongRules.elements'
import Pong from '../../Pong/Pong'

const BallsCanvasRules = () => {
  const [rules, setRules] = useState(true)
  return (
    <>
      {rules ? (
        <RulesArea>
          <RulesHalfArea>
            <RulesTop>Rules for Pong</RulesTop>
            <ul>
              <li>It's Pong...</li>
              <li>Player1 uses W and S</li>
              <li>Player2 uses O and L</li>
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
        <Pong />
      )}
    </>
  )
}

export default BallsCanvasRules
