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

export function handleKeyPressDown(e, arr1, arr2) {
  if (e.key === 'w') {
    arr1[0] = true
  }
  if (e.key === 's') {
    arr1[1] = true
  }
  if (e.key === 'o') {
    arr2[0] = true
  }
  if (e.key === 'l') {
    arr2[1] = true
  }
}

export function handleKeyPressUp(e, arr1, arr2) {
  if (e.key === 'w') {
    arr1[0] = false
  }
  if (e.key === 's') {
    arr1[1] = false
  }
  if (e.key === 'o') {
    arr2[0] = false
  }
  if (e.key === 'l') {
    arr2[1] = false
  }
}
