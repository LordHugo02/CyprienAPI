import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RightsRef {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    rate: number

    @Column()
    name: string
    @Column()
    slug: string
    
}
