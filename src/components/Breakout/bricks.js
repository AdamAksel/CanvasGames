function createBrick(lives, posX, posY, sizeX, sizeY, color, bounceTimer) {
  return {
    lives: lives,
    sizeX: sizeX,
    sizeY: sizeY,
    color: color,
    bounceTimer: bounceTimer,
    bottomLeft: [posX, posY],
    bottomRight: [posX + sizeX, posY],
    topRight: [posX + sizeX, posY - sizeY],
    topLeft: [posX, posY - sizeY],
  }
}

function brickLayer(canvas, arr) {
  let brickWidth = Math.floor(canvas.width / 13)
  let gap = Math.floor(canvas.width / 50)
  let bricksY = Math.floor(canvas.height / 2)

  for (let i = 0; i < 10; i++) {
    arr.push(
      createBrick(
        1,
        gap * (i + 1) + brickWidth * i,
        bricksY - bricksY / 10,
        brickWidth,
        -20,
        'red',
        0
      )
    )
  }
  for (let i = 0; i < 10; i++) {
    arr.push(
      createBrick(
        2,

        gap * (i + 1) + brickWidth * i,
        bricksY / 3 + bricksY / 3 - bricksY / 10,

        brickWidth,
        -20,
        'green',
        0
      )
    )
  }
  for (let i = 0; i < 10; i++) {
    arr.push(
      createBrick(
        1,
        gap * (i + 1) + brickWidth * i,
        bricksY / 3 - bricksY / 10,
        brickWidth,
        -20,
        'red',
        0
      )
    )
  }
}

function drawBricks(ctx, arr) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.fillStyle = arr[i].color
    ctx.fillRect(
      arr[i].bottomLeft[0],
      arr[i].bottomLeft[1],
      arr[i].sizeX,
      arr[i].sizeY
    )
    ctx.closePath()
  }
}

function brickCollisionY(arr, ball) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (ball.velY < 0 &&
        ball.pos.x > arr[i].bottomLeft[0] &&
        ball.pos.x < arr[i].bottomRight[0] &&
        ball.pos.y + 10 > arr[i].bottomLeft[1] &&
        ball.pos.y < arr[i].topLeft[1] - 10 &&
        arr[i].bounceTimer === 0) ||
      (ball.velY > 0 &&
        ball.pos.x > arr[i].topLeft[0] &&
        ball.pos.x < arr[i].topRight[0] &&
        ball.pos.y + 40 > arr[i].bottomLeft[1] &&
        ball.pos.y < arr[i].topLeft[1] - 10 &&
        arr[i].bounceTimer === 0)
    ) {
      ball.velY = ball.velY * -1
      arr[i].bounceTimer = 10
      arr[i].lives--
      if (arr[i].lives === 1) {
        arr[i].color = 'red'
      }
      if (arr[i].lives === 0) {
        arr.splice(i, 1)
      }
    }
  }
}

function brickCollisionX(arr, ball) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (ball.velX < 0 &&
        ball.pos.y - 10 < arr[i].topRight[1] &&
        ball.pos.y + 10 > arr[i].bottomRight[1] &&
        ball.pos.x > arr[i].bottomRight[0] - 40 &&
        ball.pos.x < arr[i].bottomRight[0] + 10 &&
        arr[i].bounceTimer === 0) ||
      (ball.velX > 0 &&
        ball.pos.y - 10 < arr[i].topLeft[1] &&
        ball.pos.y + 10 > arr[i].bottomLeft[1] &&
        ball.pos.x > arr[i].bottomLeft[0] - 10 &&
        ball.pos.x < arr[i].bottomLeft[0] + 40 &&
        arr[i].bounceTimer === 0)
    ) {
      ball.velX = ball.velX * -1
      arr[i].bounceTimer = 10
      arr[i].lives--
      if (arr[i].lives === 1) {
        arr[i].color = 'red'
      }
      if (arr[i].lives === 0) {
        arr.splice(i, 1)
      }
    }
  }
}

function bounceTimer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].bounceTimer > 0) {
      arr[i].bounceTimer--
    }
  }
}

export function handleBricks(ctx, canvas, arr, ball, player) {
  if (arr.length < 1) {
    player.stage++
    brickLayer(canvas, arr)
  }
  bounceTimer(arr)
  brickCollisionY(arr, ball)
  brickCollisionX(arr, ball)
  drawBricks(ctx, arr)
}
