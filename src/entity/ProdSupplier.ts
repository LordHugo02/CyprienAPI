import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Product } from "./Product"
import { Supplier } from "./Supplier"

@Entity()
export class ProdSupplier {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Product, product => product.id)
    product: Product
    @ManyToOne(() => Supplier, supplier => supplier.id)
    supplier: Supplier

}
