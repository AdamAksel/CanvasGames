import { useRef, useEffect } from 'react'
// canvas styling, unnessesary to have here but... yeah
export function canvasStyleY(windowY) {
  let windowHeight = windowY
  return windowHeight * 0.9
}
export function canvasStyleX(windowX) {
  let windowWidth = windowX
  return windowWidth * 0.9
}

export function useInterval(callback, delay) {
  const stableCallback = useRef(callback)

  useEffect(() => {
    stableCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => stableCallback.current()

    if (typeof delay !== 'number') return

    const t = setInterval(tick, delay)

    return () => clearTimeout(t)
  }, [delay])
}

export function handleKeyPressDown(e, arr1) {
  if (e.key === 'a' || e.key === 'A') {
    arr1[0] = true
  }
  if (e.key === 'd' || e.key === 'D') {
    arr1[1] = true
  }
}

export function handleKeyPressUp(e, arr1) {
  if (e.key === 'a' || e.key === 'A') {
    arr1[0] = false
  }
  if (e.key === 'd' || e.key === 'D') {
    arr1[1] = false
  }
}

export function lifeAndStageCounter(ctx, canvas, player) {
  ctx.fillStyle = 'black'
  ctx.font = '20px Arial'
  ctx.fillText('Stage: ' + player.stage, 10, canvas.height - 50)
  if (player.lives === 0) {
    return ctx.fillText(
      'Lives: ' + player.lives + ', You are Dead!',
      10,
      canvas.height - 20
    )
  }
  ctx.fillText('Lives: ' + player.lives, 10, canvas.height - 20)
}
