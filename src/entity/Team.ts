import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @PrimaryGeneratedColumn("uuid")
    token: string

    @ManyToOne(() => User, user => user.id)
    user: User

}
