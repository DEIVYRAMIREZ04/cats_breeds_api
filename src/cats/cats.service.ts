import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    try {
      const cat = this.catsRepository.create(createCatDto);
      return await this.catsRepository.save(cat);
    } catch (error) {
      
      if (error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException('El gato ya existe');
      }

      throw new InternalServerErrorException('Error al crear el gato');
    }
  }

  async findAll() {
    try {
      return await this.catsRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener los gatos');
    }
  }

  async findOne(id: number) {
    const cat = await this.catsRepository.findOneBy({ id });

    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }

    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catsRepository.findOneBy({ id });

    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }

    try {
      Object.assign(cat, updateCatDto);
      return await this.catsRepository.save(cat);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al actualizar el gato con id ${id}`,
      );
    }
  }

  async remove(id: number) {
    const cat = await this.catsRepository.findOneBy({ id });

    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }

    try {
      return await this.catsRepository.remove(cat);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al eliminar el gato con id ${id}`,
      );
    }
  }
}
