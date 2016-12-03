fs = require('fs')
fs.readFile('day3.input', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  main(data);
});

function main(data) {
  const triangles = data.split('\n');
  triangles.pop();
  let trueTriangles = 0;

  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arrCombined = [];
  for (let triangle of triangles) {
    let triangleSides = triangle.trim().replace(/\s+/g, ' ').split(' ');
    triangleSides = triangleSides.map(Number);

    arr1.push(triangleSides[0]);
    arr2.push(triangleSides[1]);
    arr3.push(triangleSides[2]);
  }

  arrCombined = [...arr1, ...arr2, ...arr3];

  let arrays = [];
  while (arrCombined.length > 0) {
    arrays.push(arrCombined.splice(0, 3));
  }

  for (let triangleSides of arrays) {
    const sideLength1 = triangleSides[0] + triangleSides[1];
    const sideLength2 = triangleSides[0] + triangleSides[2];
    const sideLength3 = triangleSides[1] + triangleSides[2];

    let isTrueTriangle = true;
    for (let side of triangleSides) {
      if (sideLength1 > side && sideLength2 > side && sideLength3 > side) {
      } else {
        isTrueTriangle = false;
      }
    }

    if (isTrueTriangle) {
      trueTriangles++;
    }
  }

  console.log(trueTriangles);
}
