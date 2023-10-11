/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary(); // ID auto-incrementável
      table.string('name').notNullable(); // Nome do usuário
      table.string('email').unique().notNullable(); // Email do usuário, deve ser único
      table.string('password').notNullable(); // Senha do usuário
      table.timestamps(true, true); // Colunas created_at e updated_at
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  
