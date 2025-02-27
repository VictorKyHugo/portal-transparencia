import { Injectable } from '@nestjs/common';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpenhosService {
  constructor(private prisma: PrismaService) {}

  create(createEmpenhoDto: CreateEmpenhoDto) {
    return this.prisma.empenho.create({ data: createEmpenhoDto });
  }

  async findAll(params: {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) {
    const {
      page = 1,
      pageSize = 10,
      sortBy = 'id',
      sortOrder = 'asc',
    } = params;

    const skip = (page - 1) * pageSize;

    const totalCount = await this.prisma.empenho.count();

    const users = await this.prisma.empenho.findMany({
      skip,
      take: pageSize,
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: users,
      meta: {
        page,
        pageSize,
        totalCount,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  findOne(id: number) {
    return this.prisma.empenho.findUnique({ where: { id } });
  }

  update(id: number, updateEmpenhoDto: UpdateEmpenhoDto) {
    return this.prisma.empenho.update({
      where: { id },
      data: updateEmpenhoDto,
    });
  }

  remove(id: number) {
    return this.prisma.empenho.delete({ where: { id } });
  }
}
