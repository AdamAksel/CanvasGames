function draw(ctx, entity) {
  ctx.beginPath()
  ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize, 0, Math.PI * 2)
  ctx.fillStyle = entity.color
  ctx.fill()
  ctx.closePath()
}

function movePlayer(entity, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0]) {
      entity.pos.y -= entity.vel
    }
    if (arr[1]) {
      entity.pos.y += entity.vel
    }
    if (arr[2]) {
      entity.pos.x -= entity.vel
    }
    if (arr[3]) {
      entity.pos.x += entity.vel
    }
  }
}

function shift(entity) {
  if (entity.pos.x > window.innerWidth * 0.9) {
    entity.pos.x -= window.innerWidth * 0.9 - 1
  }
  if (entity.pos.x < window.innerWidth * 0.9 - window.innerWidth * 0.9) {
    entity.pos.x += window.innerWidth * 0.9 - 1
  }
  if (entity.pos.y > window.innerHeight * 0.9) {
    entity.pos.y -= window.innerHeight * 0.9 - 1
  }
  if (entity.pos.y < window.innerHeight * 0.9 - window.innerHeight * 0.9) {
    entity.pos.y += window.innerHeight * 0.9 - 1
  }
}

export function handlePlayer(player, movearr, ctx) {
  movePlayer(player, movearr)
  shift(player)
  draw(ctx, player)
}
