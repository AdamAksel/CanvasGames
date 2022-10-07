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

function protectorTimers(prot) {
  if (prot.activeTimer > 0) {
    prot.activeTimer--
  } else if (prot.activeTimer === 0) {
    prot.active = false
  }
  if (prot.coolDownTimer > 0) {
    prot.coolDownTimer--
  } else if (prot.coolDownTimer === 0) {
    prot.coolDown = false
  }
}

export function handleProtector(prot, ctx) {
  protectorTimers(prot)
  ctx.textAlign = 'center'
  if (prot.coolDown === false) {
    ctx.fillStyle = 'green'
    ctx.font = '30px Arial'

    ctx.fillText(
      'Protector Circle is ready, press Space to feel Safe!',
      (window.innerWidth * 0.9) / 2,
      35
    )
  }
  if (prot.coolDown === true) {
    ctx.fillStyle = 'green'
    ctx.font = '30px Arial'
    ctx.fillText('Protector is on CoolDown!', (window.innerWidth * 0.9) / 2, 35)
  }
  if (prot.active === true) {
    move(prot)
    bounce(prot)
    draw(prot, ctx)
  }
}
