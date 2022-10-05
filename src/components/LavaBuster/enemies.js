function drawEnemy(ctx, arr) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.arc(arr[i].pos.x, arr[i].pos.y, arr[i].radie, 0, Math.PI * 2)
    ctx.fillStyle = arr[i].color
    ctx.fill()
    ctx.closePath()
  }
}

function EnemyBall(pos, velx, vely, radie, color) {
  return { pos: pos, velx: velx, vely: vely, radie: radie, color: color }
}

function createEnemyBall(arr, player, canvas) {
  if (player.enemyTimer === 0) {
    arr.push(
      new EnemyBall(
        { x: Math.floor(Math.random() * (canvas.width * 0.7)) + 100, y: 0 },
        arr.length % 2 === 0 ? 3 : -3,
        1,
        Math.floor(Math.random() * 100) + 5,
        'rgb(255,0,0)'
      )
    )
    player.enemyTimer = 150
  }
}

function enemyAndBulletCollision(arrB, arrE) {
  if (arrB.length === 0 || arrE.length === 0) {
    return null
  }

  for (let i = 0; i < arrB.length; i++) {
    for (let j = 0; j < arrE.length; j++) {
      let distanceX = (arrB[i].pos.x - arrE[j].pos.x) ** 2
      let distanceY = (arrB[i].pos.y - arrE[j].pos.y) ** 2
      let distance = Math.sqrt(distanceX + distanceY)
      if (distance < arrE[j].radie) {
        arrB.splice(i, 1)
        if (arrE[j].radie > 25) {
          arrE.push(
            new EnemyBall(
              { x: arrE[j].pos.x + arrE[j].radie / 2, y: arrE[j].pos.y },
              3,
              -5,
              arrE[j].radie / 2,
              'rgb(255,0,0)'
            )
          )
          arrE.push(
            new EnemyBall(
              { x: arrE[j].pos.x - arrE[j].radie / 2, y: arrE[j].pos.y },
              -3,
              -5,
              arrE[j].radie / 2,
              'rgb(255,0,0)'
            )
          )
          arrE.splice(j, 1)
          return
        } else {
          arrE.splice(j, 1)
          return
        }
      }
    }
  }
}

function moveEnemy(arr, canvas) {
  if (arr.length === 0) {
    return null
  }
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].vely > 0) {
      arr[i].vely += 0.29
    }
    if (arr[i].vely < 0) {
      arr[i].vely += 0.3
    }

    arr[i].pos.x += arr[i].velx
    arr[i].pos.y += arr[i].vely
  }
}

function bounceEnemy(arr, canvas) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].pos.x + arr[i].radie > canvas.width ||
      arr[i].pos.x - arr[i].radie < canvas.width - canvas.width
    ) {
      arr[i].velx = arr[i].velx * -1
    }
    if (arr[i].pos.y + arr[i].radie > canvas.height) {
      arr[i].vely = arr[i].vely * -1 - 1
    }
  }
}

export function handleEnemies(ctx, arrE, player, canvas, arrB) {
  createEnemyBall(arrE, player, canvas)
  bounceEnemy(arrE, canvas)
  moveEnemy(arrE, canvas)
  drawEnemy(ctx, arrE)
  enemyAndBulletCollision(arrB, arrE)
}
