/**
 * server.js
 * author:huangjihua
 * created 2015/1/1.
 */
var http =require('http');
var jade =require('jade');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'}); //text/plain显示源码text/html渲染

    //1.演示compile函数 api  编译一个函数
    //var fn =jade.compile('div #{course}',{});
    //var  html =fn ({course:"jade compile",title:'compile'});
    //2. 演示jade.render函数 api  [渲染字符串]
     //html = jade.render('div #{course}',{course:'jade render',title:'render'});
    //3.演示jade.renderFile函数API [渲染文件]{第一个参数是文件路径+文件名，第二个参数options可选，回调函数可作为第二个参数}
    //html = jade.renderFile('index.jade',{course:'jade renderFile',title:"jade",pretty:true});

    //客户端
    var html = jade.compileClient('string of jade #{title}',{title:'test'});

    res.end(html);
}).listen(1337,'127.0.0.1');
console.log('server running at 1337');