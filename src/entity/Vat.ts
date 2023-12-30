import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Vat {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rate: number
    
    @Column()
    name: string

    @ManyToOne(() => Team, team => team.id)
    team: Team

}
