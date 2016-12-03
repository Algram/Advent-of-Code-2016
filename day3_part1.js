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

  for (let triangle of triangles) {
    let triangleSides = triangle.trim().replace(/\s+/g, ' ').split(' ');
    triangleSides = triangleSides.map(Number);

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
