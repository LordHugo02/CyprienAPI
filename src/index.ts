import { AppDataSource } from "./data-source"
import { RightsRef } from "./entity"

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

    //     console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
