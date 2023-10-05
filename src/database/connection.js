const sql = require('mssql');
const dbConfig = require('../configs/dbconfig.js');

const poolPromise = sql.connect(dbConfig).then(pool => {
    console.log('Conectado ao banco de dados!');
    return pool;
}).catch(err => {
    console.error('Erro ao conectar com o banco de dados', err);
});

module.exports = {
    sql, poolPromise
};
