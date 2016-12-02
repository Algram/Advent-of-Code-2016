fs = require('fs')
fs.readFile('day2.input', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  main(data);
});

function main(data) {
  const instructions = data.split('\n');
  instructions.pop();

  /*
  # # #
  # # #
  # # #
  */

  for (instruction of instructions) {
    const directions = instruction.split('');

    for (direction of directions) {
      switch (direction) {
        case 'U':
          position.moveX(-1);
          break;
        case 'R':
          position.moveY(1);
          break;
        case 'D':
          position.moveX(1);
          break;
        case 'L':
          position.moveY(-1);
          break;
      }
    }

    console.log(position.getPosition());
  }

}

let posX = 2;
let posY = 2;
const position = {
  moveX(num) {
    posX += num;
    if (posX === 1 && posY === 0) posX = 2;
    if (posX === 3 && posY === 0) posX = 2;

    if (posX === 0 && posY === 1) posX = 1;
    if (posX === 4 && posY === 1) posX = 3;

    if (posX === -1 && posY === 2) posX = 0;
    if (posX === 5 && posY === 2) posX = 4;

    if (posX === 0 && posY === 3) posX = 1;
    if (posX === 4 && posY === 3) posX = 3;

    if (posX === 1 && posY === 4) posX = 2;
    if (posX === 3 && posY === 4) posX = 2;

  },
  moveY(num) {
    posY += num;
    if (posY === 1 && posX === 0) posY = 2;
    if (posY === 3 && posX === 0) posY = 2;

    if (posY === 0 && posX === 1) posY = 1;
    if (posY === 4 && posX === 1) posY = 3;

    if (posY === -1 && posX === 2) posY = 0;
    if (posY === 5 && posX === 2) posY = 4;

    if (posY === 0 && posX === 3) posY = 1;
    if (posY === 4 && posX === 3) posY = 3;

    if (posY === 1 && posX === 4) posY = 2;
    if (posY === 3 && posX === 4) posY = 2;
  },
  getPosition() {
    return `${posX} ${posY}`;
  }
}
