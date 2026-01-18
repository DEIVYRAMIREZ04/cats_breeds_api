import { Injectable, NotFoundException } from '@nestjs/common';
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
    const cat = this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(cat);
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    return await this.catsRepository.findOneBy({ id });
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
  const cat = await this.catsRepository.findOneBy({ id });

  if (!cat) {
    throw new NotFoundException(`Cat with id ${id} not found`);
  }

  Object.assign(cat, updateCatDto);
  return await this.catsRepository.save(cat);
}


  async remove(id: number) {
    const cat = await this.catsRepository.findOneBy({ id });

    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }

    return await this.catsRepository.remove(cat);
  }
}
