require('dotenv').config()
import "reflect-metadata"
import { DataSource } from "typeorm"
import { AccessLog, RightsRef, SubscriptionRights, RightsBase, Subscription, SubscriptionRightsLink, User, Team, Group, UserGroupLink, RightGroupLink, Family, Use, Storage, Unit, Vat, Supplier, Product, ProdSupplier, History, Income, Outcome } from "./entity"

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
        Vat,
        Use,
        Unit,
        User,
        Team,
        Group,
        Family,
        Income,
        Storage,
        Outcome,
        Product,
        History,
        Supplier,
        AccessLog,
        RightsRef,
        RightsBase,
        ProdSupplier,
        Subscription,
        UserGroupLink,
        RightGroupLink,
        SubscriptionRights,
        SubscriptionRightsLink,
    ],
    migrations: [],
    subscribers: [],
    dropSchema: true
})
