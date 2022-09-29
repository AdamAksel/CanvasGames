import React, { useRef } from 'react'
import {
  canvasStyleX,
  canvasStyleY,
  useInterval,
  handleKeyPressDown,
  handleKeyPressUp,
} from './functions'
import { handlePlayers } from './players'
import { handleBall } from './ball'
import { player1, player2, pongBall } from './data'

const Pong = () => {
  const canvasRef = useRef(null)
  let moveArray1 = [false, false]
  let moveArray2 = [false, false]

  const render = () => {
    let canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    document.addEventListener('keydown', (e) => {
      handleKeyPressDown(e, moveArray1, moveArray2)
    })

    document.addEventListener('keyup', (e) => {
      handleKeyPressUp(e, moveArray1, moveArray2)
    })
    handlePlayers(context, player1, player2, moveArray1, moveArray2)
    handleBall(context, pongBall, player1, player2)
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

export default Pong
