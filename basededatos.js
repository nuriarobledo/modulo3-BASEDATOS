const mysql = require('mysql')
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'nuriarobledo',
    password: 'Y8/1O_TpT9ufRVee',
    database: 'prueba1',
})
conection.connect( (err) =>{
    if (err) throw err
    console.log('la conexion funciona')
})