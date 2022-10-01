import React, { useRef } from 'react'
import {
  canvasStyleX,
  canvasStyleY,
  useInterval,
  handleKeyPressDown,
  handleKeyPressUp,
} from './functions'
import { handlePlayer } from './player'
import { handleBall } from './ball'
import { Player, BreakoutBall } from './data'

const Breakout = () => {
  const canvasRef = useRef(null)
  let moveArray = [false, false]

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
    handlePlayer(context, Player, moveArray, canvas)
    handleBall(context, BreakoutBall, Player, canvas)
  }

  useInterval(() => {
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

export default Breakout
