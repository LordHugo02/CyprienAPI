import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class RightsBase {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    table_name: string

}
