const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'rest',
    port:8888
})

connection.connect((error)=>{
    if(error){
        return console.log('Ошибка подключения')
    } else {
        return console.log('Подключились к БД')
    }
})

module.exports = connection