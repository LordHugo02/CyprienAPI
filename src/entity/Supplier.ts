import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Team } from "./Team"

@Entity()
export class Supplier {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    socialReason: string
    @Column()
    address: string
    @Column()
    postalCode: string
    @Column()
    city: string
    @Column()
    country: string
    @Column()
    fax: string
    @Column()
    phone: string
    @Column()
    email: string
    @Column()
    website: string

    @ManyToOne(() => Team, team => team.id)
    team: Team

}
