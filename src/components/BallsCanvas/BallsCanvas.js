import React, { useEffect, useRef } from 'react'

const BallsCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    let canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = 'green'
    context.fillRect(10, 10, 100, 100)
  }, [])

  return (
    <>
      <canvas
        style={{ backgroundColor: '#88f' }}
        id='canvas'
        height='900'
        width='1400'
        ref={canvasRef}
      />
    </>
  )
}

export default BallsCanvas
