import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from "typeorm"
import { Group } from "./Group"
import { RightsBase } from "./RightsBase"

@Entity()
export class RightGroupLink {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Group, group => group.id)
    group: Group

    @ManyToOne(() => RightsBase, right => right.id)
    right: RightsBase

    @PrimaryColumn()
    content: string
}
