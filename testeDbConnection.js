const knex = require('knex');
const knexConfig = require('./knexfile').production;

const db = knex(knexConfig);

db.raw('SELECT 1')
  .then(() => {
    console.log('Conexão bem-sucedida!');
    db.destroy();
  })
  .catch(err => {
    console.error('Erro na conexão:', err);
    db.destroy();
  });
