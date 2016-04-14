const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.js')
});
//line事件当遇到\n,\r,\r\n的时候就会触发，或者用户输入了enter键
rl.on('line', (line) => {
  console.log('Line from file:', line);
});