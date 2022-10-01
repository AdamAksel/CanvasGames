import React, { useState } from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
} from './BreakoutRules.elements'
import Breakout from '../../Breakout/Breakout'

const BallsCanvasRules = () => {
  const [rules, setRules] = useState(true)
  return (
    <>
      {rules ? (
        <RulesArea>
          <RulesHalfArea>
            <RulesText>PlaceHolder</RulesText>

            <RulesText>PlaceHolder</RulesText>

            <RulesText>PlaceHolder</RulesText>

            <RulesText>PlaceHolder</RulesText>

            <RulesText>PlaceHolder</RulesText>

            <RulesText>PlaceHolder</RulesText>

            <RulesText>PlaceHolder</RulesText>
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
      ) : (
        <Breakout />
      )}
    </>
  )
}

export default BallsCanvasRules
