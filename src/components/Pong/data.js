export const player1 = {
  score: 0,
  pos: { x: 100, y: (window.innerHeight * 0.9) / 2 },
  sizeX: -20,
  sizeY: 100,
  color: 'rgb(255,255,255)',
  vel: 4,
}

export const player2 = {
  score: 0,
  pos: { x: window.innerWidth * 0.9 - 100, y: (window.innerHeight * 0.9) / 2 },
  sizeX: 20,
  sizeY: 100,
  color: 'rgb(255,255,255)',
  vel: 4,
}

export const pongBall = {
  pos: { x: (window.innerWidth * 0.9) / 2, y: (window.innerHeight * 0.9) / 2 },
  size: 10,
  color: 'rgb(255,255,255)',
  velX: 8,
  velY: 5,
  bounceTimer: 0,
}
