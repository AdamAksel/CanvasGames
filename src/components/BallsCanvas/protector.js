function draw(entity, ctx) {
  ctx.beginPath()
  ctx.strokeStyle = entity.color
  ctx.lineWidth = 10
  ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize, 0, Math.PI * 2)
  ctx.stroke()
  ctx.closePath()
}

function bounce(entity) {
  if (
    entity.pos.x + (entity.ballSize + 10) > window.innerWidth * 0.9 ||
    entity.pos.x - (entity.ballSize + 10) <
      window.innerWidth * 0.9 - window.innerWidth * 0.9
  ) {
    entity.deltaX = entity.deltaX * -1
  }
  if (
    entity.pos.y + (entity.ballSize + 10) > window.innerHeight * 0.9 ||
    entity.pos.y - (entity.ballSize + 10) <
      window.innerHeight * 0.9 - window.innerHeight * 0.9
  ) {
    entity.deltaY = entity.deltaY * -1
  }
}

function move(entity) {
  entity.pos.x += entity.deltaX
  entity.pos.y += entity.deltaY
}

export function handleProtector(prot, ctx) {
  if (prot.coolDown === false) {
    ctx.fillStyle = 'green'
    ctx.font = '30px Arial'
    ctx.fillText('Protector is on CoolDown!', (window.innerWidth * 0.9) / 2, 35)
  }
  if (prot.active === true) {
    ctx.fillStyle = 'green'
    ctx.font = '30px Arial'
    ctx.fillText(
      'Protector Circle is ready, press Space to feel Safe!',
      (window.innerWidth * 0.9) / 2,
      35
    )

    move(prot)
    bounce(prot)
    draw(prot, ctx)
  }
}
