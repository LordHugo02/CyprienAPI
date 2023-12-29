// console.clear()
import { AppDataSource } from "./data-source"
import { RightsRef, Subscription, SubscriptionRights, SubscriptionRightsLink } from "./entity"

async function save(item){
    await AppDataSource.manager.save(item)
}

AppDataSource.initialize()
.then(async () => { 
    
    // ===== Creation Basic Rights ============================================================================================
    
    // const baseRight1 = new RightsRef()
    // const baseRight2 = new RightsRef()
    // const baseRight3 = new RightsRef()

    // baseRight1.name = "Voir"
    // baseRight1.slug = "read"
    // baseRight1.rate = 1

    // baseRight2.name = "Modifier"
    // baseRight2.slug = "edit"
    // baseRight2.rate = 2

    // baseRight3.name = "Ajouter / Supprimer"
    // baseRight3.slug = "create-delete"
    // baseRight3.rate = 4
    
    // await AppDataSource.manager.save(baseRight1)
    // await AppDataSource.manager.save(baseRight2)
    // await AppDataSource.manager.save(baseRight3)
    
    // ===== ==================================================================================================================

    // ===== Test des liens ===================================================================================================

    // const sub = new Subscription()
    // sub.duration = 1
    // sub.name = "Test"
    // sub.price = 12.99
    // await save(sub)
    
    // const right = new SubscriptionRights()
    // right.description = "The description"
    // right.name = "The Name"
    // right.slug = "name"
    // await save(right)

    // const link = new SubscriptionRightsLink()
    // link.content = "OK"
    // link.right = right
    // link.subscription = sub
    // await save(link)
    
    // console.log(link);
    

    //     console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
