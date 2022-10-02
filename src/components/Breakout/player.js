function movePlayer(entity, arr, canvas) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] && entity.pos.x - 12 > 0) {
      entity.pos.x -= entity.vel
    }
    if (arr[1] && entity.pos.x + 210 < canvas.width) {
      entity.pos.x += entity.vel
    }
  }
}

function bounceTimer(entity) {
  if (entity.bounceTimer > 0) {
    entity.bounceTimer--
  }
}

function draw(ctx, entity) {
  ctx.beginPath()
  ctx.fillStyle = entity.color
  ctx.fillRect(entity.pos.x, entity.pos.y, entity.sizeX, entity.sizeY)
  ctx.closePath()
}

export function handlePlayer(ctx, entity, arr, canvas) {
  movePlayer(entity, arr, canvas)
  bounceTimer(entity)
  draw(ctx, entity, canvas)
}
