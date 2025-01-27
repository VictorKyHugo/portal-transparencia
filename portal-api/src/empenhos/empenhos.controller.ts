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
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { EmpenhoEntity } from './entities/empenho.entity';

@Controller('empenhos')
export class EmpenhosController {
  constructor(private readonly empenhosService: EmpenhosService) {}

  @Post()
  @ApiCreatedResponse({ type: EmpenhoEntity })
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

  @ApiOkResponse({ type: EmpenhoEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empenhosService.findOne(+id);
  }

  @ApiOkResponse({ type: EmpenhoEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpenhoDto: UpdateEmpenhoDto) {
    return this.empenhosService.update(+id, updateEmpenhoDto);
  }

  @ApiOkResponse({ type: EmpenhoEntity })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empenhosService.remove(+id);
  }
}
