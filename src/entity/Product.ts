import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Family } from "./Family"
import { Storage } from "./Storage"
import { Use } from "./Use"
import { Unit } from "./Unit"
import { Vat } from "./Vat"

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    @Column()
    description: string
    @Column()
    reference: string
    @Column()
    barcode: string
    @Column()
    webLink: string

    @Column()
    price_ht: number
    @Column()
    quantity: number
    @Column()
    quantity_base: number
    @Column()
    quantity_mini: number

    @CreateDateColumn()
    createdAt: Date
    @UpdateDateColumn()
    updatedAt: Date


    @ManyToOne(() => Family, family => family.id)
    family: Family
    @ManyToOne(() => Storage, storage => storage.id)
    storage: Storage
    @ManyToOne(() => Use, use => use.id)
    use: Use
    @ManyToOne(() => Unit, unit => unit.id)
    unit: Unit
    @ManyToOne(() => Vat, vat => vat.id)
    vat: Vat

}
