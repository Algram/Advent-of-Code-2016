const crypto = require('crypto');

const doorID = 'abbhdwsy';

let foundChars = 0;
for (let i = 0; foundChars < 8; i++) {
  let hash = crypto.createHash('md5').update(doorID + i).digest("hex");
  let firstFiveChars = hash.substring(0,5);

  if (firstFiveChars === '00000') {
    console.log(hash.substring(5,6));
    foundChars++;
  }
}
