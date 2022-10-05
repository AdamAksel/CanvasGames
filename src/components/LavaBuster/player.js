function draw(ctx, entity) {
  ctx.beginPath()
  ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize, 0, Math.PI * 2)
  ctx.fillStyle = entity.color
  ctx.fill()
  ctx.closePath()
}

function movePlayer(entity, arrM) {
  for (let i = 0; i < arrM.length; i++) {
    if (arrM[0]) {
      entity.pos.x -= entity.vel
    }
    if (arrM[1]) {
      entity.pos.x += entity.vel
    }
  }
}

function enemyTimer(player) {
  if (player.enemyTimer > 0) {
    player.enemyTimer--
  }
}

export function handlePlayer(ctx, player, arrM) {
  enemyTimer(player)
  movePlayer(player, arrM)
  draw(ctx, player)
}
