import React from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
} from './BallsCanvasRules.elements'

const BallsCanvasRules = (props) => {
  const { rules, setRules } = props
  return (
    <>
      <RulesArea>
        <RulesHalfArea>
          <RulesText>Here Are The Rules...</RulesText>

          <RulesText>Move with W A S D</RulesText>

          <RulesText>Press SpaceBar to get a helping hand</RulesText>

          <RulesText>Collect PowerUps</RulesText>

          <RulesText>Red is Health</RulesText>

          <RulesText>Blue is Temporary Speed</RulesText>

          <RulesText>Green is Temporary GodMode</RulesText>
        </RulesHalfArea>
        <RulesHalfArea>
          <RulesButton
            onClick={() => {
              setRules(!rules)
            }}
          >
            <RulesText>Ready?</RulesText>
          </RulesButton>
        </RulesHalfArea>
      </RulesArea>
    </>
  )
}

export default BallsCanvasRules
