import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { Product } from "./Product"
import { User } from "./User"
import { Supplier } from "./Supplier"

@Entity()
export class Income {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product, product => product.id)
    product: Product
    @ManyToOne(() => User, user => user.id)
    user: User
    @ManyToOne(() => Supplier, supplier => supplier.id)
    supplier: Supplier|null

    @CreateDateColumn()
    createdAt: Date
    
    @Column()
    reason: string
    @Column()
    entry_at: Date
    @Column()
    quantity: number
    @Column()
    itemPrice: number


}
