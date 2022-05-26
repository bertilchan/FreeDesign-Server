import mysql from 'mysql';
let max = 10;
let connArr = [];

let config = {
	host: 'localhost',
	port: '3306',
	// user: 'root', // 本地
	user: 'freedesign',
	password: 'root',
	database: 'freedesign',
	encoding: 'UTF8'
};

for (let i = 0; i < max; i++) {
	connArr[i] = mysql.createConnection(config);
}
let now = max;

// 获取数据库连接对象
function getConnection() {
	if (now > 0) {
		return connArr[--now];
	} else {
		return null;
	}
}

// 回收
function recovery(conn) {
	connArr[now++] = conn;
}

export default {
	getConnection,
	recovery,
};
