const knex = require('../database'); // Supondo que você tenha um arquivo de configuração para a conexão do banco de dados chamado database.js

exports.create = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await knex('users').insert({
            name,
            email,
            password // Lembre-se: nunca armazene senhas em texto claro. Use bcrypt para fazer hash.
        }).returning('*'); // Retorna o usuário recém-criado

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await knex('users').select('*');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

// ... Adicione aqui as outras funções CRUD, conforme necessário.
