import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from "typeorm"
import { User } from "./User"
import { Group } from "./Group"

@Entity()
export class UserGroupLink {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.id)
    user: User

    @ManyToOne(() => Group, group => group.id)
    group: Group

    @PrimaryColumn()
    content: string
}
