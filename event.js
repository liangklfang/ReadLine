close事件：
 //当调用了close方法时候触发。如果输入流接收到了end事件也会触发。这时候Interface实例已经完成了。如输入流遇到Ctrl+D会被看做为EOT(文末)。这个方法在input流遇到Ctrl+C(也被认为为SIGINT)时候，同时也没有SIGINT事件监听器的时候也会触发。