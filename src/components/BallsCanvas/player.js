export function draw(ctx, entity) {
  ctx.beginPath()
  ctx.arc(entity.pos.x, entity.pos.y, entity.ballSize, 0, Math.PI * 2)
  ctx.fillStyle = entity.color
  ctx.fill()
  ctx.closePath()
}

export function movePlayer(entity, arr) {
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

export function shift(entity) {
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

export function handleKeyPressDown(e, arr) {
  if (e.key === 'w') {
    arr[0] = true
  }
  if (e.key === 's') {
    arr[1] = true
  }
  if (e.key === 'a') {
    arr[2] = true
  }
  if (e.key === 'd') {
    arr[3] = true
  }
}

export function handleKeyPressUp(e, arr) {
  if (e.key === 'w') {
    arr[0] = false
  }
  if (e.key === 's') {
    arr[1] = false
  }
  if (e.key === 'a') {
    arr[2] = false
  }
  if (e.key === 'd') {
    arr[3] = false
  }
}
