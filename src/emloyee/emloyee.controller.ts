// /* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmloyeeService } from './emloyee.service';
import { Prisma} from '@prisma/client';

@Controller('emloyee')
export class EmloyeeController {
  constructor(private readonly emloyeeService: EmloyeeService) {}

  @Post()
  create(@Body() createEmloyeeDto:  Prisma.EmployeeCreateInput) {
    console.log(createEmloyeeDto)   
    return this.emloyeeService.create(createEmloyeeDto);
  }

  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'USER') {
    return this.emloyeeService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emloyeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmloyeeDto: Prisma.EmployeeUpdateInput) {
    return this.emloyeeService.update(+id, updateEmloyeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emloyeeService.remove(+id);
  }
}
