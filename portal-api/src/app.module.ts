import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmpenhosModule } from './empenhos/empenhos.module';

@Module({
  imports: [PrismaModule, EmpenhosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
