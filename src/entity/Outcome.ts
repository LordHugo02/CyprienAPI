import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { Product } from "./Product"
import { User } from "./User"

@Entity()
export class Outcome {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product, product => product.id)
    product: Product
    @ManyToOne(() => User, user => user.id)
    user: User

    @CreateDateColumn()
    createdAt: Date
    
    @Column()
    reason: string
    @Column()
    out_at: Date
    @Column()
    quantity: number
    @Column()
    itemPrice: number


}
