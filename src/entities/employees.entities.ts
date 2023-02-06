import {Entity, PrimaryGeneratedColumn,ManyToMany,JoinTable, Column} from "typeorm"
import { Jobs } from "./job.entities";

@Entity() 
export  class Employess{
    @PrimaryGeneratedColumn("uuid",)
    id: string;

    @Column({
        length: 63,
        nullable: false
    })
    name:string;

    @ManyToMany(() => Jobs, jobs=> jobs.employees, {
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    })
    @JoinTable()
    jobs:Jobs[]
}

