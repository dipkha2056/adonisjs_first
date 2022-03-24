import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.integer('phone').notNullable().unique();
      table.string('address').nullable();
      table.boolean('status').defaultTo(false)


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true,true)
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
