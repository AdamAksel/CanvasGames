import React from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
} from './PongRules.elements'

const BallsCanvasRules = (props) => {
  const { rules, setRules } = props
  return (
    <>
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
    </>
  )
}

export default BallsCanvasRules
