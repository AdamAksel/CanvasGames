import React, { useState } from 'react'
import {
  RulesArea,
  RulesHalfArea,
  RulesButton,
  RulesText,
  RulesTop,
} from './LavaBusterRules.elements'
import LavaBuster from '../../LavaBuster/LavaBuster'

const LavaBusterRules = () => {
  const [rules, setRules] = useState(true)
  return (
    <>
      {rules ? (
        <RulesArea>
          <RulesHalfArea>
            <RulesTop>Rules for LavaBuster</RulesTop>
            <ul>
              <li>Move with A and D</li>
              <li>Press "L" to Shoot at LavaBalls</li>
              <li>Collect PowerUps</li>
              <li>Red is Health</li>
              <li>Blue is Temporary Rapid Fire</li>
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
        <LavaBuster />
      )}
    </>
  )
}

export default LavaBusterRules
