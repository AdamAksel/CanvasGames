import React, { useRef } from 'react'
import {
  canvasStyleY,
  canvasStyleX,
  handleKeyPressDown,
  handleKeyPressUp,
  useInterval,
  scoreCounter,
} from './functions'
import { playerBall } from './data'
import { handlePlayer } from './player'
import { handleBullets } from './bullets'
import { handleEnemies } from './enemies'
import { handlePowerUps } from './powerups'

const LavaBuster = () => {
  const canvasRef = useRef(null)
  let moveArray = [false, false, false]
  let enemyArray = []
  let powerArray = []
  let bulletArray = []

  const render = () => {
    let canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    document.addEventListener('keydown', (e) => {
      handleKeyPressDown(e, moveArray)
    })
    document.addEventListener('keyup', (e) => {
      handleKeyPressUp(e, moveArray)
    })
    scoreCounter(context, playerBall)
    handlePlayer(context, playerBall, moveArray, canvas)
    handleBullets(context, moveArray, playerBall, bulletArray)
    handleEnemies(context, enemyArray, playerBall, canvas, bulletArray)
    handlePowerUps(context, powerArray, playerBall, canvas)
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

export default LavaBuster
