import { Module } from '@nestjs/common';
import { EmpenhosService } from './empenhos.service';
import { EmpenhosController } from './empenhos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EmpenhosController],
  providers: [EmpenhosService],
  imports: [PrismaModule],
})
export class EmpenhosModule {}
