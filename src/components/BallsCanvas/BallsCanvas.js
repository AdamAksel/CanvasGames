import React, { useEffect, useRef } from 'react'
import { canvasStyleY, canvasStyleX } from './functions'
import {
  draw,
  movePlayer,
  shift,
  handleKeyPressDown,
  handleKeyPressUp,
} from './player'
import {
  drawEnemy,
  shiftEnemy,
  moveEnemy,
  createEnemyBall,
  touchPlayer,
} from './enemies'
import { playerBall } from './data'

const BallsCanvas = () => {
  const canvasRef = useRef(null)
  let moveArray = [false, false, false, false]
  let enemyArray = []

  useEffect(() => {
    const render = () => {
      let start = Date.now()
      let canvas = canvasRef.current
      const context = canvas.getContext('2d')
      context.clearRect(0, 0, canvas.width, canvas.height)
      document.addEventListener('keydown', (e) => {
        handleKeyPressDown(e, moveArray)
      })
      document.addEventListener('keyup', (e) => {
        handleKeyPressUp(e, moveArray)
      })
      createEnemyBall(enemyArray)
      moveEnemy(enemyArray)
      shiftEnemy(enemyArray)
      drawEnemy(context, enemyArray)
      touchPlayer(enemyArray, playerBall)

      movePlayer(playerBall, moveArray)
      shift(playerBall)
      draw(context, playerBall)

      let end = Date.now()
      setTimeout(() => {
        requestAnimationFrame(render)
      }, 44 - (start - end))
    }

    render()
  }, [])

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
