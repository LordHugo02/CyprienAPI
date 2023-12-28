import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Subscription {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    duration: number
    @Column()
    price: number

    @Column()
    can_subscribe: boolean

}
