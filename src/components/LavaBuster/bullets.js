function Bullet(pos, vely, radie, color) {
  return { pos: pos, vely: vely, radie: radie, color: color }
}

function moveBullet(arrB) {
  if (arrB.length !== 0) {
    for (let i = 0; i < arrB.length; i++) {
      arrB[i].pos.y -= arrB[i].vely
    }
  }
}

function shootTimer(entity) {
  if (entity.shootTimer > 0) {
    entity.shootTimer--
  }
}

function createBullet(arrM, entity, arrB) {
  if (
    arrM[2] &&
    entity.shootTimer === 0 &&
    (arrB.length < 3 || entity.rapidFireTimer > 0)
  ) {
    arrB.push(
      new Bullet(
        { x: entity.pos.x, y: entity.pos.y - 35 },
        15,
        5,
        'rgb(0,0,255)'
      )
    )
    entity.shootTimer = 5
  }
}

function bulletTopSplice(arrB) {
  for (let i = 0; i < arrB.length; i++) {
    if (arrB[i].pos.y < 0) {
      arrB.splice(i, 1)
    }
  }
}

function drawBullet(ctx, arr) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.arc(arr[i].pos.x, arr[i].pos.y, arr[i].radie, 0, Math.PI * 2)
    ctx.fillStyle = arr[i].color
    ctx.fill()
    ctx.closePath()
  }
}

export function handleBullets(ctx, arrM, entity, arrB) {
  moveBullet(arrB)
  shootTimer(entity)
  drawBullet(ctx, arrB)
  createBullet(arrM, entity, arrB)
  bulletTopSplice(arrB)
}
