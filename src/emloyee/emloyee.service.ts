/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmloyeeService {
   constructor(private readonly databaseService: DatabaseService){}
  create(createEmloyeeDto: Prisma.EmployeeCreateInput) {
    console.log(createEmloyeeDto)  
    return this.databaseService.employee.create({
      data:createEmloyeeDto
    })
  }

  async findAll(role?: 'ADMIN' | 'USER'){
    if(role ){
      return this.databaseService.employee.findMany({
        where:{
          role
        }
      })
    }
    return this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateEmloyeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where:{
        id,
      },
      data:updateEmloyeeDto,
    })
  }

 async remove(id: number) {
    return  this.databaseService.employee.delete({
      where:{
        id,
      }
    })
  }
}
