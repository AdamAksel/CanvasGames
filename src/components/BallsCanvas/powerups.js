function PowerUp(pos, radie, color, speedUp, godMode, healthUp) {
  return { pos: pos, radie: radie, color: color, speedUp, godMode, healthUp }
}

function createPowerUp(arr) {
  let powerColor = ''
  let randomizer = Math.floor(Math.random() * 150)
  if (randomizer === 1 || randomizer === 2 || randomizer === 3) {
    if (randomizer === 1) {
      powerColor = 'rgb(255,0,0'
    } else if (randomizer === 2) {
      powerColor = 'rgb(0,0,255'
    } else {
      powerColor = 'rgb(0,255,0'
    }
    if (arr.length < 1) {
      arr.push(
        new PowerUp(
          {
            x: Math.floor(Math.random() * (window.innerWidth * 0.9)),
            y: Math.floor(Math.random() * (window.innerHeight * 0.9)),
          },
          40,
          powerColor,
          false,
          false,
          false
        )
      )
    }
  }
}

function drawPowerUp(arr, ctx) {
  for (let i = 0; i < arr.length; i++) {
    ctx.beginPath()
    ctx.arc(arr[i].pos.x, arr[i].pos.y, arr[i].radie, 0, Math.PI * 2)
    ctx.fillStyle = arr[i].color
    ctx.fill()
    ctx.closePath()
    if (arr[i].color === 'rgb(255,0,0') {
      arr[i].healthUp = true
    } else if (arr[i].color === 'rgb(0,0,255') {
      arr[i].speedUp = true
    } else {
      arr[i].godMode = true
    }
  }
}

function powerTouchPlayer(player, arr) {
  let distanceX = (arr[0].pos.x - player.pos.x) ** 2
  let distanceY = (arr[0].pos.y - player.pos.y) ** 2
  let distance = Math.sqrt(distanceX + distanceY)
  if (distance < 40 + player.ballSize && arr[0].healthUp) {
    arr.splice(0, 1)
    player.health = player.health + 1
  } else if (distance < 40 + player.ballSize && arr[0].speedUp) {
    arr.splice(0, 1)
    player.vel += 2
  } else if (distance < 40 + player.ballSize && arr[0].godMode) {
    arr.splice(0, 1)
    player.godMode = true
  }
}

export function handlePowerUp(arr, player, ctx) {
  createPowerUp(arr)
  if (arr.length > 0) {
    drawPowerUp(arr, ctx)
    powerTouchPlayer(player, arr)
  }
}
