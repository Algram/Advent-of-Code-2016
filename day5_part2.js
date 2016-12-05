const crypto = require('crypto');

const doorID = 'abbhdwsy';
const password = [];

let foundChars = 0;
for (let i = 0; foundChars < 8; i++) {
  let hash = crypto.createHash('md5').update(doorID + i).digest("hex");
  let firstFiveChars = hash.substring(0,5);
  let position = hash.substring(5,6);

  if (firstFiveChars === '00000' && isValid(position) && password[parseInt(position)] === undefined) {
    let passwordChar = hash.substring(6,7);
    password[parseInt(position)] = passwordChar;
    console.log(passwordChar);
    foundChars++;
  }
}

console.log(password);

function isValid(pos) {
  if (!isNaN(pos) && pos < 8) {
    return true;
  } else {
    return false;
  }
}
