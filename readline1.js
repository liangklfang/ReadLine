const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
//替换前面的>符号
rl.setPrompt('OHAI> ');
rl.prompt();
//调用prompt方法会提示用户如下消息：OHAI>，如果不调用这个方法那么结果就是没有前面的OHAI>然后接受用户输入。
//当用户输入了一些结束符，如\n,\r,\r\n时候，一般是当用户输入了enter键，这个方法是很好的用于监听用户的输入的。
rl.on('line', (line) => {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      break;
  }
 rl.prompt();
 //跳出switch循环的时候继续给用户提供一个OHAI>用于输入，否则还是没有任何信息！
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});