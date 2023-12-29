import { Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Subscription } from "./Subscription"
import { SubscriptionRights } from "./SubscriptionRights"

@Entity()
export class SubscriptionRightsLink {

    @ManyToOne(() => Subscription, sub => sub.id)
    subscription: Subscription

    @ManyToOne(() => SubscriptionRights, subRight => subRight.id)
    right: SubscriptionRights

    @PrimaryColumn()
    content: string

}
