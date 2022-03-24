import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserRoles extends BaseSchema {
  protected tableName = 'user_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('phone').notNullable().unique();
      table.string('role').nullable().defaultTo('user');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
      table.boolean('status').defaultTo(false)

    
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
