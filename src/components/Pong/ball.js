function drawBall(ctx, entity) {
  ctx.beginPath()
  ctx.arc(entity.pos.x, entity.pos.y, entity.size, 0, Math.PI * 2)
  ctx.fillStyle = entity.color
  ctx.fill()
  ctx.closePath()
}

function moveBall(entity) {
  entity.pos.x += entity.velX
  entity.pos.y += entity.velY
}

function bounceWall(entity) {
  if (
    entity.pos.y + entity.size > window.innerHeight * 0.9 ||
    entity.pos.y - entity.size <
      window.innerHeight * 0.9 - window.innerHeight * 0.9
  ) {
    entity.velY = entity.velY * -1
  }
}

function restartBall(entity, player1, player2) {
  if (entity.pos.x + entity.size > window.innerWidth * 0.9) {
    player2.health -= 1
    entity.pos.x = (window.innerWidth * 0.9) / 2
    entity.pos.y = (window.innerHeight * 0.9) / 2
    entity.velY = entity.velY * -1
    entity.velX = entity.velX * -1
  }
  if (
    entity.pos.x + entity.size <
    window.innerWidth * 0.9 - window.innerWidth * 0.9
  ) {
    player1.health -= 1
    entity.velY = entity.velY * -1
    entity.velX = entity.velX * -1
    entity.pos.x = (window.innerWidth * 0.9) / 2
    entity.pos.y = (window.innerHeight * 0.9) / 2
  }
}

function bouncePlayer(entity, player1, player2) {
  let distanceX1 = (entity.pos.x - player1.pos.x) ** 2
  let distanceY1 = (entity.pos.y - player1.pos.y) ** 2
  let distance1 = Math.sqrt(distanceX1 + distanceY1)
  //serious collision problems
  if (
    (distance1 < 50 || distance1 < -50) &&
    distanceX1 < 10 &&
    entity.bounceTimer === 0
  ) {
    console.log(distance1, distanceX1)
    entity.velX = entity.velX * -1
    entity.bounceTimer = 20
  }
  let distanceX2 = (entity.pos.x - player2.pos.x) ** 2
  let distanceY2 = (entity.pos.y - player2.pos.y) ** 2
  let distance2 = Math.sqrt(distanceX2 + distanceY2)

  if (distance2 < 100 && distanceX2 < 10 && entity.bounceTimer === 0) {
    entity.velX = entity.velX * -1
    entity.bounceTimer = 20
  }
}

function ballTimer(entity) {
  if (entity.bounceTimer > 0) {
    entity.bounceTimer--
  }
}

export function handleBall(ctx, entity, player1, player2) {
  ballTimer(entity)
  moveBall(entity)
  bounceWall(entity)
  bouncePlayer(entity, player1, player2)
  restartBall(entity, player1, player2)
  drawBall(ctx, entity)
}
