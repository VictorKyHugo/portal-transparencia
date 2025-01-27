import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EmpenhosService } from './empenhos.service';
import { CreateEmpenhoDto } from './dto/create-empenho.dto';
import { UpdateEmpenhoDto } from './dto/update-empenho.dto';

@Controller('empenhos')
export class EmpenhosController {
  constructor(private readonly empenhosService: EmpenhosService) {}

  @Post()
  create(@Body() createEmpenhoDto: CreateEmpenhoDto) {
    return this.empenhosService.create(createEmpenhoDto);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('sortBy') sortBy = 'id',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    return this.empenhosService.findAll({
      page: +page,
      pageSize: +pageSize,
      sortBy,
      sortOrder,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empenhosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpenhoDto: UpdateEmpenhoDto) {
    return this.empenhosService.update(+id, updateEmpenhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empenhosService.remove(+id);
  }
}
