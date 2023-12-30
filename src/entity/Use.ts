import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Use {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    description: string

    @ManyToOne(() => Team, team => team.id)
    team: Team

}
