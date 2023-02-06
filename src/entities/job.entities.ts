import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  Column,
} from 'typeorm'
import { Employess } from './employees.entities'

@Entity()
export class Jobs {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    length: 63,
    nullable: false,
  })
  title: string

  @Column({
    length: 63,
    nullable: false,
  })
  salary: string

  @ManyToMany(() => Employess, (employees) => employees.jobs)
  @JoinTable()
  employees: Employess[]
}
