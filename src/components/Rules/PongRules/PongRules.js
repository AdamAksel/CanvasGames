import React, { useState } from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
} from './PongRules.elements'
import Pong from '../../Pong/Pong'

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
        <Pong />
      )}
    </>
  )
}

export default BallsCanvasRules
