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

function restartBall(entity, player1, player2, canvas) {
  if (entity.pos.x + entity.size > canvas.width) {
    player1.score += 1
    entity.velX = 8
    entity.pos.x = canvas.width / 2
    entity.pos.y = canvas.height / 2
    entity.velY = entity.velY * -1
    entity.velX = entity.velX * -1
  }
  if (entity.pos.x + entity.size < canvas.width - canvas.width) {
    player2.score += 1
    entity.velX = -8
    entity.velY = entity.velY * -1
    entity.velX = entity.velX * -1
    entity.pos.x = canvas.width / 2
    entity.pos.y = canvas.height / 2
  }
}

function bouncePlayer(entity, player1, player2) {
  let distanceX1 = (entity.pos.x - player1.pos.x) ** 2
  let distanceY1 = (entity.pos.y - player1.pos.y) ** 2
  let distance1 = Math.sqrt(distanceX1 + distanceY1)
 
  if (
    distance1 < 100 &&
    distanceX1 < 100 &&
    entity.pos.y > player1.pos.y &&
    entity.bounceTimer === 0
  ) {
    entity.velX = entity.velX * -1
    entity.bounceTimer = 20
  }
  let distanceX2 = (entity.pos.x - player2.pos.x) ** 2
  let distanceY2 = (entity.pos.y - player2.pos.y) ** 2
  let distance2 = Math.sqrt(distanceX2 + distanceY2)

  if (
    distance2 < 100 &&
    distanceX2 < 100 &&
    entity.pos.y > player2.pos.y &&
    entity.bounceTimer === 0
  ) {
    entity.velX = entity.velX * -1
    entity.bounceTimer = 20
  }
}

function ballTimer(entity) {
  if (entity.bounceTimer > 0) {
    entity.bounceTimer--
    if (entity.bounceTimer === 5) {
      if (entity.velX < 0) {
        entity.velX--
      } else {
        entity.velX++
      }
    }
  }
}

export function handleBall(ctx, entity, player1, player2, canvas) {
  ballTimer(entity)
  moveBall(entity)
  bounceWall(entity)
  bouncePlayer(entity, player1, player2)
  restartBall(entity, player1, player2, canvas)
  drawBall(ctx, entity)
}
