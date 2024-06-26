import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Team } from "./Team"

// Groups for Users

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => Team, team => team.id)
    team: Team

}
