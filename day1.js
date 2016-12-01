fs = require('fs')
fs.readFile('day1.input', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  main2(data);
});

/*
0 = north
1 = east
2 = south
3 = west
*/
let currDirection = 3;

const compass = {
  getDirection(string) {
    if (string === 'L') {
      currDirection = currDirection - 1;
    } else {
      currDirection = currDirection + 1;
    }

    if (currDirection === -1) {
      currDirection = 3;
    }

    if (currDirection === 4) {
      currDirection = 0;
    }

    return currDirection;
  }
};

function main(data) {
  const directions = data.split(', ');
  let startX = 0;
  let startY = 0;
  let currDirection;

  for(let direction of directions) {
    const distance = parseInt(direction.substr(1));
    currDirection = compass.getDirection(direction[0]);

    if (currDirection === 0) {
      startY += distance;
    } else if (currDirection === 1) {
      startX += distance;
    } else if (currDirection === 2) {
      startY -= distance;
    } else if (currDirection === 3) {
      startX -= distance;
    }

    for (let i = 0; i < distance; i++) {
      let stepX = startX;
      let stepY = startY;

      if (currDirection === 0) {
        stepY += i;
      } else if (currDirection === 1) {
        stepX += i;
      } else if (currDirection === 2) {
        stepY -= i;
      } else if (currDirection === 3) {
        stepX -= i;
      }

      for (location of visitedLocations) {
        let visitedX = location.x;
        let visitedY = location.y;

        if (visitedX === stepX && visitedY === stepY) {
          console.log('BUHEAH', stepX + stepY);
        }
      }

      visitedLocations.push({x:stepX, y:stepY});
    }
  }

  console.log(startX + startY);
}


const visitedLocations = [];

function main2(data) {
  const directions = data.split(', ');
  let startX = 0;
  let startY = 0;
  let currDirection;

  for(let direction of directions) {
    const distance = parseInt(direction.substr(1));
    currDirection = compass.getDirection(direction[0]);

    for (let i = 0; i < distance; i++) {
      if (currDirection === 0) {
        startY += i;
      } else if (currDirection === 1) {
        startX += i;
      } else if (currDirection === 2) {
        startY -= i;
      } else if (currDirection === 3) {
        startX -= i;
      }

      for (location of visitedLocations) {
        let visitedX = location.x;
        let visitedY = location.y;

        if (visitedX === startX && visitedY === startY) {
          console.log('BUHEAH', startX + startY);
        }
      }

      visitedLocations.push({x:startX, y:startY});
    }
  }
}
