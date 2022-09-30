function movePlayer(entity1, entity2, arr1, arr2, canvas) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[0] && entity1.pos.y - 5 > 0) {
      entity1.pos.y -= entity1.vel
    }
    if (arr1[1] && entity1.pos.y + 105 < canvas.height) {
      entity1.pos.y += entity1.vel
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[0] && entity2.pos.y - 5 > 0) {
      entity2.pos.y -= entity2.vel
    }
    if (arr2[1] && entity2.pos.y + 105 < canvas.height) {
      entity2.pos.y += entity2.vel
    }
  }
}

function draw(ctx, entity1, entity2) {
  ctx.beginPath()
  ctx.fillStyle = entity1.color
  ctx.fillRect(entity1.pos.x, entity1.pos.y, entity1.sizeX, entity1.sizeY)
  ctx.fillRect(entity2.pos.x, entity2.pos.y, entity2.sizeX, entity2.sizeY)
  ctx.closePath()
}

export function handlePlayers(ctx, entity1, entity2, arr1, arr2, canvas) {
  movePlayer(entity1, entity2, arr1, arr2, canvas)
  draw(ctx, entity1, entity2, canvas)
}
