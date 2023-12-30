import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Unit {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    symbol: string
    @Column()
    description: string

    @ManyToOne(() => Team, team => team.id)
    team: Team

}
