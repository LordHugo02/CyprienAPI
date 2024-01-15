import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { Product } from "./Product"
import { User } from "./User"

@Entity()
export class History {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product, product => product.id)
    product: Product
    @ManyToOne(() => User, user => user.id)
    user: User

    @CreateDateColumn()
    createdAt: Date
    
    @Column()
    action: string

}
