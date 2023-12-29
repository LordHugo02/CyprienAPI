import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"
import * as Common from "../common"

@Entity()
export class Team {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    token: string = Common.generateToken()

    @ManyToOne(() => User, user => user.id)
    user: User

}
