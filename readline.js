const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//返回的是Class.Interface，用于显示一个逐行读取的界面用于读入和输出数据
rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log('Thank you for your valuable feedback:', answer);
  rl.close();
  //关闭界面实例，放弃对input/output流的控制，这时候close事件也会触发
});

pause方法：
 //暂停input流，用于以后消费。注意：这个不会马上停止流事件，很多事件都会在pause后触发，包括line事件
 rl.prompt([preserveCursor])
 //把preserveCursor设为true可以防止光标被设置为0
 rl.question(query, callback)
 //给弹出页面添加query，同时根据用户的输入来执行回调函数。如果流已经停止了，那么这个方法调用的时候createInterface 又可以继续读取输入流了。如果在调用createInterface时候把output设置为null/undefined那么不会有任何效果
	rl.question('What is your favorite food?', (answer) => {
	  console.log(`Oh, so your favorite food is ${answer}`);
	});
rl.resume()
//这个方法可以继续读取输入流
rl.setPrompt(prompt)
//设置运行node.js时候前面的>符号
rl.write(data[, key])
//把data数据输出到输出流中，除非把options的output设置为null/undefined，当调用createInterface时候。key参数是一个对象用于指定key序列，当终端是TTY的时候可用。如果调用时候input已经停止了那么这时候又会继续消费input：
rl.write('Delete me!');
// Simulate ctrl+u to delete the line written previously
rl.write(null, {ctrl: true, name: 'u'});
readline.createInterface(options)方法：









