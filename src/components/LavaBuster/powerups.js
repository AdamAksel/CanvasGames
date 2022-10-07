function PowerBall(pos, vely, radie, color) {
  return { pos: pos, vely: vely, radie: radie, color: color }
}

function drawPowerBall(ctx, arr, player) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.arc(arr[i].pos.x, arr[i].pos.y, arr[i].radie, 0, Math.PI * 2)
    if (player.powerTimer % 15 === 0) {
      ctx.fillStyle = 'whitesmoke'
    } else {
      ctx.fillStyle = arr[i].color
    }

    ctx.fill()
    ctx.arc(arr[i].pos.x, arr[i].pos.y, arr[i].radie - 1, 0, Math.PI * 2)
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.closePath()
  }
}

function createPowerBall(arr, player, canvas) {
  if (player.powerTimer > 0) {
    return null
  }
  let color
  let random = Math.floor(Math.random() * 3) + 1
  if (random === 1) {
    color = 'green'
  } else if (random === 2) {
    color = 'red'
  } else {
    color = 'blue'
  }

  arr.push(
    new PowerBall(
      { x: Math.floor(Math.random() * (canvas.width * 0.7)) + 100, y: 0 },
      5,
      20,
      color
    )
  )
  player.powerTimer = 500
}

function movePowerBall(arr, canvas) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].pos.y < canvas.height - 21) {
      arr[i].pos.y += arr[i].vely
    }
  }
}

function powerAndPlayerCollision(arr, player) {
  for (let i = 0; i < arr.length; i++) {
    let distanceX = (arr[i].pos.x - player.pos.x) ** 2
    let distanceY = (arr[i].pos.y - player.pos.y) ** 2
    let distance = Math.sqrt(distanceX + distanceY)
    if (distance < player.ballSize + arr[i].radie) {
      if (arr[i].color === 'green') {
        player.godMode = 300
      } else if (arr[i].color === 'red') {
        player.health++
      } else {
        player.rapidFireTimer = 200
      }
      arr.splice(i, 1)
    }
  }
}

export function handlePowerUps(ctx, arrP, player, canvas) {
  drawPowerBall(ctx, arrP, player)
  createPowerBall(arrP, player, canvas)
  movePowerBall(arrP, canvas)
  powerAndPlayerCollision(arrP, player)
}
