function draw(ctx, entity) {
  ctx.beginPath()
  ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize, 0, Math.PI * 2)
  ctx.fillStyle = entity.color
  ctx.fill()
  ctx.closePath()
  ctx.fillStyle = 'black'
  ctx.font = '50px Arial'
  ctx.textAlign = 'center'
  ctx.fillText(entity.health, entity.pos.x, entity.pos.y + 20)

  if (entity.godMode > 0) {
    ctx.beginPath()
    ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize + 5, 0, Math.PI * 2)
    ctx.strokeStyle = 'green'
    ctx.lineWidth = 10
    ctx.stroke()
    ctx.closePath()
  }
  if (entity.rapidFireTimer > 0) {
    ctx.beginPath()
    ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize + 2, 0, Math.PI * 2)
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 5
    ctx.stroke()
    ctx.closePath()
  }
}

function movePlayer(entity, arrM, canvas) {
  for (let i = 0; i < arrM.length; i++) {
    if (arrM[0] && entity.pos.x > entity.ballSize) {
      entity.pos.x -= entity.vel
    }
    if (arrM[1] && entity.pos.x + entity.ballSize < canvas.width) {
      entity.pos.x += entity.vel
    }
  }
}

function Timers(player) {
  if (player.enemyTimer > 0) {
    player.enemyTimer--
  }
  if (player.godMode > 0) {
    player.godMode--
  }
  if (player.powerTimer > 0) {
    player.powerTimer--
  }
  if (player.rapidFireTimer > 0) {
    player.rapidFireTimer--
  }
}

export function handlePlayer(ctx, player, arrM, canvas) {
  Timers(player)
  movePlayer(player, arrM, canvas)
  draw(ctx, player)
}
