import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
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
