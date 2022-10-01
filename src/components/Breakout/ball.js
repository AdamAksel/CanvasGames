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

function bounceWall(entity, canvas) {
  if (
    entity.pos.y + entity.size > canvas.height ||
    entity.pos.y - entity.size < canvas.height - canvas.height
  ) {
    entity.velY = entity.velY * -1
  }
  if (
    entity.pos.x + entity.size > canvas.width ||
    entity.pos.x - entity.size < canvas.width - canvas.width
  ) {
    entity.velX = entity.velX * -1
  }
}

function bouncePlayer(entity, player) {
  let distanceXSimple = entity.pos.x - player.pos.x
  let bounceDirection = Math.floor(distanceXSimple - 100) / 3.5
  let distanceX = (entity.pos.x - player.pos.x) ** 2
  let distanceY = (entity.pos.y - player.pos.y) ** 2
  let distance = Math.sqrt(distanceX + distanceY)
  if (
    distance < 200 &&
    distanceY < 200 &&
    entity.pos.x > player.pos.x &&
    entity.bounceTimer === 0
  ) {
    console.log(bounceDirection)
    entity.velY = entity.velY * -1
    entity.velX = bounceDirection
    entity.bounceTimer = 20
  }
}

function ballTimer(entity) {
  if (entity.bounceTimer > 0) {
    entity.bounceTimer--
  }
}

export function handleBall(ctx, entity, player, canvas) {
  ballTimer(entity)
  moveBall(entity)
  bounceWall(entity, canvas)
  bouncePlayer(entity, player)

  drawBall(ctx, entity)
}
