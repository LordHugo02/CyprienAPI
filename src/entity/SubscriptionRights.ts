import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SubscriptionRights {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    slug: string
    @Column()
    description: string

}
