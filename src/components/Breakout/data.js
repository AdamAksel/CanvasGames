export const Player = {
  lives: 3,
  pos: { x: (window.innerHeight * 0.9) / 2, y: window.innerHeight - 200 },
  sizeX: 200,
  sizeY: 20,
  color: 'rgb(255,255,255)',
  vel: 10,
  bounceTimer: 0,
  stage: 0,
}

export const BreakoutBall = {
  pos: { x: Player.pos.x + 100, y: Player.pos.y - 20 },
  size: 10,
  color: 'rgb(255,255,255)',
  velX: 0,
  velY: -10,
  bounceTimer: 0,
}
