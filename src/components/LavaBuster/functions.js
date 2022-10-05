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

export function handleKeyPressDown(e, arr) {
  if (e.key === 'a') {
    arr[0] = true
  }
  if (e.key === 'd') {
    arr[1] = true
  }

  if (e.key === 'l') {
    arr[2] = true
  }
}

export function handleKeyPressUp(e, arr) {
  if (e.key === 'a') {
    arr[0] = false
  }
  if (e.key === 'd') {
    arr[1] = false
  }
  if (e.key === 'l') {
    arr[2] = false
  }
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
