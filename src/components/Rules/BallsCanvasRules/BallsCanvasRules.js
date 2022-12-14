import React, { useState } from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
  RulesTop,
} from './BallsCanvasRules.elements'
import BallsCanvas from '../../BallsCanvas/BallsCanvas'

const BallsCanvasRules = () => {
  const [rules, setRules] = useState(true)
  return (
    <>
      {rules ? (
        <RulesArea>
          <RulesHalfArea>
            <RulesTop>Rules for BallSurvival</RulesTop>
            <ul>
              <li>Move with W A S D</li>
              <li>Press SpaceBar to get a helping hand</li>
              <li>Collect PowerUps</li>
              <li>Red is Health</li>
              <li>Blue is Temporary Speed</li>
              <li>Green is Temporary GodMode</li>
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
        <BallsCanvas />
      )}
    </>
  )
}

export default BallsCanvasRules
