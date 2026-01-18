import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCatDto {
  @ApiPropertyOptional({
    example: 'Michi actualizado',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: 'Siamés',
  })
  @IsOptional()
  @IsString()
  breed?: string;

  @ApiPropertyOptional({
    example: 'Tranquilo',
  })
  @IsOptional()
  @IsString()
  temperament?: string;

  @ApiPropertyOptional({
    example: 'Le gusta dormir mucho',
  })
  @IsOptional()
  @IsString()
  characteristic?: string;
}
