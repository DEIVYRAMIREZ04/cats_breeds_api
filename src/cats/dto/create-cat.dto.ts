import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @ApiPropertyOptional({
    example: 'Michi',
    description: 'Nombre del gato',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({
    example: 'Siamés',
    description: 'Raza del gato',
  })
  @IsString()
  @IsNotEmpty()
  breed: string;

  @ApiPropertyOptional({
    example: 'Cariñoso y juguetón',
    description: 'Temperamento del gato',
  })
  @IsString()
  @IsNotEmpty()
  temperament: string;

  @ApiPropertyOptional({
    example: 'Le gusta dormir al sol',
    description: 'Característica principal del gato',
  })
  @IsString()
  @IsNotEmpty()
  characteristic: string;
}
