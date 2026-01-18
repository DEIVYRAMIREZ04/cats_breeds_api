import { ApiProperty } from '@nestjs/swagger';

export class CatResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Michi' })
  name: string;

  @ApiProperty({ example: 'Siamés' })
  breed: string;

  @ApiProperty({ example: 'Cariñoso y juguetón' })
  temperament: string;

  @ApiProperty({ example: 'Le gusta dormir al sol' })
  characteristic: string;
}
