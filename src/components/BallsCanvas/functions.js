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

//functions to handle key presses

export function handleKeyPressDown(e, arr, prot) {
  if (e.key === 'w' || e.key === 'W') {
    arr[0] = true
    if (!prot.active) {
      prot.deltaY = -4
    }
  }
  if (e.key === 's' || e.key === 'S') {
    arr[1] = true
    if (!prot.active) {
      prot.deltaY = 4
    }
  }
  if (e.key === 'a' || e.key === 'A') {
    arr[2] = true
    if (!prot.active) {
      prot.deltaX = -4
    }
  }
  if (e.key === 'd' || e.key === 'D') {
    arr[3] = true
    if (!prot.active) {
      prot.deltaX = 4
    }
  }

  if (e.key === ' ' && !prot.coolDown) {
    prot.coolDown = true
    prot.active = true
    prot.coolDownTimer = 400
    prot.activeTimer = 200
  }
}

export function handleKeyPressUp(e, arr) {
  if (e.key === 'w' || e.key === 'W') {
    arr[0] = false
  }
  if (e.key === 's' || e.key === 'S') {
    arr[1] = false
  }
  if (e.key === 'a' || e.key === 'A') {
    arr[2] = false
  }
  if (e.key === 'd' || e.key === 'D') {
    arr[3] = false
  }
}

export function lifeCounter(ctx, player) {
  ctx.fillStyle = 'red'
  ctx.textAlign = 'start'
  ctx.font = '30px Arial'
  if (player.health < 1) {
    ctx.fillText('Lives: ' + player.health, 10, 35)
    ctx.fillText('You Died!', 10, 70)
    return
  }
  ctx.fillText('Lives: ' + player.health, 10, 35)
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
