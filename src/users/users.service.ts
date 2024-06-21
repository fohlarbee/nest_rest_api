/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { updateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
    private _users = [
        {
            id:'1',
            name: 'John',
            email:'john@gmail.com',
            role: 'ADMIN'
        },
        {
            id:'2',
            name: 'Emaka',
            email:'emeka23@gmail.com',
            role:'USER'
        }
    ]


    findAll(role?: 'ADMIN' | 'USER'){
        if(role){
           const rolesArray = this._users.filter((user:any) => user.role === role);
           if(!rolesArray.length){
            return new NotFoundException(`Role ${role} not found`);
           }
        }
        return this._users
    }


    findOne(id:string){
        const user = this._users.find((user:any) => user.id === id);

        if(!user) throw new NotFoundException('USER NOT FOUND');
        return user;
    }

    create(user:CreateUserDto){
        const userWithHighestId = [...this._users].sort((a:any, b:any) => b.id = a.id);

        const newUser = {
            id:userWithHighestId[0].id  + 1,
            ...user
        }
        this._users.push(newUser);

        return newUser;
    }

    update(id:string, updatedUser:updateUserDto){
        this._users = this._users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUser}
            }
            return user;

        })
        return this.findOne(id);
    }

    deleteUser(id: string){
        const removedUser = this.findOne(id);
        this._users = this._users.filter(user => user.id !==id);

        return removedUser; 
    }
}
