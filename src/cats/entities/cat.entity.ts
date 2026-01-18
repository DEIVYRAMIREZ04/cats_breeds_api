import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cat_breeds')
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  breed: string;

  @Column({ length: 150 })
  temperament: string;

  @Column({ length: 255 })
  characteristic: string;
}
