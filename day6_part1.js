fs = require('fs')
fs.readFile('day6.input', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  main(data);
});

function main(data) {
  const messages = data.split('\n');
  messages.pop();

  let charArray = [];

  for (let i = 0; i < 8; i++) {
    for (let message of messages) {
      const currentChar = message[i];

      if (charArray[i] === undefined) {
        charArray[i] = '';
      }

      charArray[i] += currentChar;
    }
  }

  for (let char of charArray) {
    let expCounts = {};
    let maxKey = '';
    for(let i = 0; i < char.length; i++) {
      const key = char[i];
      if(!expCounts[key]){
        expCounts[key] = 0;
      }

      expCounts[key]++;

      if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
      }
    }

    console.log(maxKey);
  }
}
