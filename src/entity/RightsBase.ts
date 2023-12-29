import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RightsBase {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    table_name: string

}
