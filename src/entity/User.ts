import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    email: string
    @Column()
    password: string
    @Column()
    firstName: string
    @Column()
    lastName: string
    @Column()
    token: string = null

    @Column()
    active: boolean = false
    @Column()
    pass_lock: boolean = false

}
