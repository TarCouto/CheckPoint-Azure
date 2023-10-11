/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transactions', function(table) {
        table.increments('id').primary(); // ID auto-incrementável da transação
        table.integer('user_id').unsigned().references('id').inTable('users').notNullable(); // ID do usuário relacionado
        table.decimal('amount', 9, 2).notNullable(); // Quantidade da transação
        table.string('description').notNullable(); // Descrição da transação
        table.timestamps(true, true); // Colunas created_at e updated_at
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('transactions');
};
