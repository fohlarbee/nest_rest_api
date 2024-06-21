import { Module } from '@nestjs/common';
import { EmloyeeService } from './emloyee.service';
import { EmloyeeController } from './emloyee.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmloyeeController],
  providers: [EmloyeeService],
})
export class EmloyeeModule {}
