export const playerBall = {
  health: 3,
  pos: { x: (window.innerWidth * 0.9) / 2, y: (window.innerHeight * 0.9) / 2 },
  ballSize: 30,
  sizeTimer: 33,
  color: 'rgb(255,255,255)',
  vel: 2,
  speedUpTimer: 0,
  godMode: false,
  godModeTimer: 0,
}

export const protectorCircle = {
  pos: {
    x: Math.floor(Math.random() * (window.innerWidth / 2) + 170),
    y: Math.floor(Math.random() * (window.innerHeight / 2) + 170),
  },
  ballSize: 150,
  color: 'green',
  vel: 2,
  deltaX: 0,
  deltaY: 0,
  coolDown: false,
  active: false,
  activeTimer: 0,
  coolDownTimer: 0,
}
