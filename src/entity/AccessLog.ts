import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class AccessLog {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    identifier: string
    @Column()
    password: string

    @Column()
    successful: boolean

    @CreateDateColumn()
    accessAt: Date

}
