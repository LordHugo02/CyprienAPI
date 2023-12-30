import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Storage {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    slug: string
    @Column()
    description: string

    @ManyToOne(() => Team, team => team.id)
    team: Team

}
