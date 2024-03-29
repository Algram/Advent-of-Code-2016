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

let posX = 1;
let posY = 1;
const position = {
  moveX(num) {
    posX += num;
    if (posX < 0) posX = 0;
    if (posX > 2) posX = 2;
  },
  moveY(num) {
    posY += num;
    if (posY < 0) posY = 0;
    if (posY > 2) posY = 2;
  },
  getPosition() {
    return `${posX} ${posY}`;
  }
}
