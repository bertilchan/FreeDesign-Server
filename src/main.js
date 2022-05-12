import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fs from 'fs';

let app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());

let staticUrl = path.resolve('webapp/');

// 过滤器
import requestFilter from './filter/requestFilter.js';
import forwardFilter from './filter/forwardFilter.js';
forwardFilter.use(app);
app.use(requestFilter.requestFilter);

// 静态资源目录
app.use(express.static(staticUrl));

// 控制器
import userController from './controller/userController.js';
import projectController from './controller/projectController.js';
import otherController from './controller/otherController.js';
userController.run(app);
projectController.run(app);
otherController.run(app);

// 端口
let port = 99;

app.listen(port, function(req, res) {
	console.log(`服务已启动: http://localhost:${port}`);
});


// 记录当前进程号
let pid = process.pid;
fs.writeFileSync('log/pid.log', '' + pid);
