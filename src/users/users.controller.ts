/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { updateUserDto } from './dto/update-user-dto';
@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService){}
  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'USER' ) {
    return this.userService.findAll(role);
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
   
  @Post()
  create(@Body(ValidationPipe) user: CreateUserDto){
    return this.userService.create(user);
  }

  @Patch('id')
  async update(@Param('id') id: string, @Body(ValidationPipe) user: updateUserDto): Promise<any>{
    return this.userService.update(id, user);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any>{

    return this.userService.deleteUser(id);
    
}

}