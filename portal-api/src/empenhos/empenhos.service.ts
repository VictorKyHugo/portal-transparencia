import { Injectable } from '@nestjs/common';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpenhosService {
  constructor(private prisma: PrismaService) {}

  create(createEmpenhoDto: CreateEmpenhoDto) {
    return 'This action adds a new empenho';
  }

  findAll() {
    return this.prisma.empenho.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} empenho`;
  }

  update(id: number, updateEmpenhoDto: UpdateEmpenhoDto) {
    return `This action updates a #${id} empenho`;
  }

  remove(id: number) {
    return `This action removes a #${id} empenho`;
  }
}
