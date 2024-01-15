import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Subscription } from "./Subscription"
import { SubscriptionRights } from "./SubscriptionRights"

@Entity()
export class SubscriptionRightsLink {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Subscription, sub => sub.id)
    subscription: Subscription

    @ManyToOne(() => SubscriptionRights, subRight => subRight.id)
    right: SubscriptionRights

    @Column()
    content: string

}
