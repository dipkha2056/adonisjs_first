import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/system/User'


export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
      name: 'deependra khatiwada',
      email: 'dipkha2056@gmail.com',
      phone: 9861047344,
      address: 'gothatar',
      status: true
      },

      {
        name: 'deependra khatiwada',
        email: 'dddd@gmail.com',
        phone: 98888888,
        address: 'ktm',
        status: false
        }


    ])
  }
}
