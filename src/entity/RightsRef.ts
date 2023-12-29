import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Rights for subscription

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
