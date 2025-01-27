import { ApiProperty } from '@nestjs/swagger';
export class EmpenhoEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ano: string;

  @ApiProperty()
  mes: string;

  @ApiProperty()
  unidade_gestora: string;

  @ApiProperty()
  data: Date;

  @ApiProperty()
  especie: string;

  @ApiProperty()
  empenho: string;

  @ApiProperty()
  tipo_empenho: string;

  @ApiProperty()
  elemento_despesa: string;

  @ApiProperty()
  subtitulo: string;

  @ApiProperty()
  funcao: string;

  @ApiProperty()
  subfuncao: string;

  @ApiProperty()
  programa: string;

  @ApiProperty()
  fonte_recurso: string;

  @ApiProperty()
  grupo_despesa: string;

  @ApiProperty()
  documento_favorecido: string;

  @ApiProperty()
  nome_favorecido: string;

  @ApiProperty()
  valor: number;
}
