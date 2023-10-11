const knex = require('../database');

exports.create = async (req, res) => {
    const { user_id, amount, description } = req.body;

    try {
        const newTransaction = await knex('transactions').insert({
            user_id,
            amount,
            description
        }).returning('*'); // Retorna a transação recém-criada

        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
};

exports.findAll = async (req, res) => {
    try {
        const transactions = await knex('transactions').select('*');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
};

// ... Adicione aqui as outras funções CRUD, conforme necessário.
