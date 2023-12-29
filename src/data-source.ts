require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"
import { AccessLog, RightsRef, SubscriptionRights, RightsBase, Subscription, SubscriptionRightsLink } from "./entity"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        AccessLog,
        RightsRef,
        RightsBase,
        Subscription,
        SubscriptionRights,
        SubscriptionRightsLink
    ],
    migrations: [],
    subscribers: [],
})
