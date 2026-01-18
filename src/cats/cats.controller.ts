import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatResponseDto } from './dto/cat-response.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // 📌 GET /cats
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de gatos',
    type: CatResponseDto,
    isArray: true,
  })
  findAll() {
    return this.catsService.findAll();
  }

  // 📌 GET /cats/:id
  @Get(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Gato encontrado',
    type: CatResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Gato no encontrado',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  // 📌 POST /cats
  @Post()
  @ApiBody({ type: CreateCatDto })
  @ApiResponse({
    status: 201,
    description: 'Gato creado',
    type: CatResponseDto,
  })
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // 📌 PATCH /cats/:id
  @Patch(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiBody({ type: UpdateCatDto })
  @ApiResponse({
    status: 200,
    description: 'Gato actualizado',
    type: CatResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Gato no encontrado',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(id, updateCatDto);
  }

  // 📌 DELETE /cats/:id
  @Delete(':id')
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Gato eliminado',
    type: CatResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Gato no encontrado',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.remove(id);
  }
}
