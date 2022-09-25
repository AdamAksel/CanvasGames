export function drawEnemy(ctx, arr) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.arc(arr[i].pos.x, arr[i].pos.y, arr[i].radie, 0, Math.PI * 2)
    ctx.fillStyle = arr[i].color
    ctx.fill()
    ctx.closePath()
  }
}

export function moveEnemy(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].pos.x += arr[i].velx
    arr[i].pos.y += arr[i].vely
  }
}

export function shiftEnemy(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pos.x > window.innerWidth * 0.9) {
      arr[i].pos.x -= window.innerWidth * 0.9 - 1
    }
    if (arr[i].pos.x < window.innerWidth * 0.9 - window.innerWidth * 0.9) {
      arr[i].pos.x += window.innerWidth * 0.9 - 1
    }
    if (arr[i].pos.y > window.innerHeight * 0.9) {
      arr[i].pos.y -= window.innerHeight * 0.9 - 1
    }
    if (arr[i].pos.y < window.innerHeight * 0.9 - window.innerHeight * 0.9) {
      arr[i].pos.y += window.innerHeight * 0.9 - 1
    }
  }
}

export function createEnemyBall(arr) {
  let posX
  let posY
  let startPos = Math.floor(Math.random() * 4) + 1
  let ballVelx = -Math.floor(Math.random() * 6) + 1
  let ballVely = Math.floor(Math.random() * 6) + 1
  if (startPos === 1) {
    posX = Math.floor(Math.random() * window.innerWidth * 0.9)
    posY = window.innerHeight * 0.9 - window.innerHeight * 0.9
    ballVelx = ballVelx * -1
  }
  if (startPos === 2) {
    posX = window.innerWidth * 0.9 - window.innerWidth * 0.9
    posY = Math.floor(Math.random() * window.innerHeight * 0.9)
    ballVely = ballVely * -1
  }
  if (startPos === 3) {
    posX = window.innerWidth * 0.9
    posY = Math.floor(Math.random() * window.innerHeight * 0.9)
    ballVelx = ballVelx * -1
  }
  if (startPos === 4) {
    posX = Math.floor(Math.random() * window.innerWidth * 0.9)
    posY = window.innerHeight * 0.9
    ballVely = ballVely * -1
  }
  let enemyAmount = Math.floor((window.innerWidth * 0.9) / 50)
  if (arr.length < enemyAmount) {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    arr.push(
      new EnemyBall(
        { x: posX, y: posY },
        ballVelx,
        ballVely,
        10,
        'rgb(' + r + ',' + g + ',' + b + ')'
      )
    )
  }
}

function EnemyBall(pos, velx, vely, radie, color) {
  return { pos: pos, velx: velx, vely: vely, radie: radie, color: color }
}

export function touchPlayer(arr, entity) {
  for (let i = 0; i < arr.length; i++) {
    let distanceX = (arr[i].pos.x - entity.pos.x) ** 2
    let distanceY = (arr[i].pos.y - entity.pos.y) ** 2
    let distance = Math.sqrt(distanceX + distanceY)
    if (distance < 10 + entity.ballSize) {
      arr.splice(i, 1)
      entity.health -= 1
    }
  }
}
