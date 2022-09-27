import React, { useRef } from 'react'
import {
  canvasStyleY,
  canvasStyleX,
  handleKeyPressDown,
  handleKeyPressUp,
  lifeCounter,
  useInterval,
} from './functions'
import { handlePlayer } from './player'
import { handleEnemies } from './enemies'
import { handleProtector } from './protector'
import { handlePowerUp } from './powerups'
import { playerBall, protectorCircle } from './data'

const BallsCanvas = () => {
  const canvasRef = useRef(null)
  let moveArray = [false, false, false, false]
  let enemyArray = []
  let powerArray = []

  const render = () => {
    let canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    document.addEventListener('keydown', (e) => {
      handleKeyPressDown(e, moveArray, protectorCircle)
    })

    document.addEventListener('keyup', (e) => {
      handleKeyPressUp(e, moveArray)
    })

    handleEnemies(enemyArray, context, playerBall, protectorCircle)
    handlePlayer(playerBall, moveArray, context)
    handleProtector(protectorCircle, context)
    handlePowerUp(powerArray, playerBall, context)
    lifeCounter(context, playerBall)
  }

  useInterval(() => {
    if (playerBall.health < 1) {
      return
    }
    render()
  }, 33)

  return (
    <>
      <canvas
        style={{ backgroundColor: '#88f' }}
        id='canvas'
        height={canvasStyleY(window.innerHeight)}
        width={canvasStyleX(window.innerWidth)}
        ref={canvasRef}
      />
    </>
  )
}

export default BallsCanvas
