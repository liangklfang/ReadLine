close事件：
 //当调用了close方法时候触发。如果输入流接收到了end事件也会触发。这时候Interface实例已经完成了。如输入流遇到Ctrl+D会被看做为EOT(文末)。这个方法在input流遇到Ctrl+C(也被认为为SIGINT)时候，同时也没有SIGINT事件监听器的时候也会触发。
 'line'事件
 //当输入流遇到\n, \r, or \r\n的时候触发，通常情况下是用户回车了，常用于监听用户输入
	 rl.on('line', (cmd) => {
	  console.log(`You just typed: ${cmd}`);
	});
'pause'事件
//当输入流暂停的时候触发；或者输入流没有暂停但是接受到了一个SIGCONT事件
	rl.on('pause', () => {
	  console.log('Readline paused.');
	});
'resume'事件
//当输入流继续的时候触发
	rl.on('resume', () => {
	  console.log('Readline resumed.');
	});
'SIGCONT'事件
//当输入流以ctrl+z结束，也就是我们的SIGTSTP事件，同时继续输入了fg(1)。这个事件只有当流在传递到后台时候没有暂停才会触发：
	rl.on('SIGCONT', () => {
	  // `prompt` will automatically resume the stream
	  rl.prompt();
	});

'SIGINT'事件
//当输入流接收到ctrl+c的时候，也就是SIGINT事件。如果在'SIGINT'触发的时候没有'SIGINT'监听函数这时候就会暂停输入。
	rl.on('SIGINT', () => {
	  rl.question('Are you sure you want to exit?', (answer) => {
	    if (answer.match(/^y(es)?$/i)) rl.pause();
	  });
	});
'SIGTSTP'事件：(在windows平台上无效)
//当输入流接收到ctrl+z的时候，也就是我们说的SIGTSTP事件，如果在SIGTSTP触发的时候没有为他指定监听函数，程序就会在后台运行。当程序继续运行的时候传入了fd那么'pause'/'SIGCONT'事件都会触发。你可以使用任何方法去继续流操作。如果在流传入到后台之前已经被停止，那么pause/SIGCOUNT事件不会触发。
	rl.on('SIGTSTP', () => {
	  // This will override SIGTSTP and prevent the program from going to the
	  // background.
	  console.log('Caught SIGTSTP.');
	});


















