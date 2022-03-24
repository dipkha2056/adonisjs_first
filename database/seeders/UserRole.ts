import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserRole from 'App/Models/system/UserRole'

export default class UserRoleSeeder extends BaseSeeder {
  public async run () {

    await UserRole.createMany([

      {
        name: 'deependra',
        email: 'dip@gmail.com',
        phone: 9876543,
        role: '',
        user_id: 5,
      },


      {
        name: 'deependra',
        email: 'dipp@gmail.com',
        phone: 987654309,
        role: 'admin',
        user_id: 4,
      },


    ])
   
  }
}
