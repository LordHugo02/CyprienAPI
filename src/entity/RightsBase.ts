import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// Rights for Groups

@Entity()
export class RightsBase {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    table_name: string

}
