const mysql = require('promise-mysql');

const connection = {
    host: '127.0.0.1',  // 로컬 호스트 주소
    port: 3306,         // 포트번호
    user: 'root',      // 유저
    password: '1234',   // 비밀번호
    database: 'Ounce'   // 접근할 데이터베이스 (스키마)
};

module.exports = mysql.createPool(connection)