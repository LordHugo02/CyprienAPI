// console.clear()
import { AppDataSource } from "./data-source"
import { RightsRef, Subscription, SubscriptionRights, SubscriptionRightsLink } from "./entity"

async function save(item){
    await AppDataSource.manager.save(item)
}

AppDataSource.initialize()
.then(async () => { 
    // ===== Creation Basic Rights ============================================================================================
    
    const baseRights = [
        {
            "name": "Voir",
            "slug": "read",
            "rate": 1
        },
        {
            "name": "Modifier",
            "slug": "edit",
            "rate": 2
        },
        {
            "name": "Supprimer",
            "slug": "delete",
            "rate": 4
        }
    ]

    baseRights.forEach(async (item) => {
        const right = new RightsRef()
        right.name = item.name
        right.slug = item.slug
        right.rate = item.rate
        await save(right)
    });
    
    // ===== ==================================================================================================================

    // ===== Mock Data ========================================================================================================
    // ===== Subscriptions ====================================================
    const baseSubs = [
        {
            "name":"solo",
            "duration":0,
            "price":0
        },
        {
            "name":"Team",
            "duration":1,
            "price":4.99
        },
        {
            "name":"Business",
            "duration":1,
            "price":12.99
        },
        {
            "name":"Company",
            "duration":1,
            "price":24.99
        }
    ]
    let subs = []
    baseSubs.forEach(async (item) => {
        const sub = new Subscription()
        sub.duration = item.duration
        sub.name = item.name
        sub.price = item.price
        subs.push(sub)
        await save(sub)
    });

    // ===== Rights ===========================================================
    
    const baseSubRights = [
        {
            "description": "Permet plusieurs utilisateurs pour un même magasin",
            "name": "Travail en équipe",
            "slug": "team"
        },
        {
            "description": "Nombre de groupes possible à créer pour un même magasin",
            "name": "Nombre de groupes",
            "slug": "nb_groups"

        },
        {
            "description": "Possiblité de donner des droits différent pour chaque groupe",
            "name": "Droits différent / Groupe",
            "slug": "groups_rights"
        },
        {
            "description": "Possiblité de donner des droits différent pour chaque utilisateur",
            "name": "Droits différent / Utilisateur",
            "slug": "users_rights"
        }
    ]
    let rights = []
    
    baseSubRights.forEach(async (item) => {
        const right = new SubscriptionRights()
        right.description = item.description
        right.name = item.name
        right.slug = item.slug
        rights.push(right)
        await save(right)
    });

    // ===== Rights Link ======================================================

    const baseLinks = [
        {
            "sub":subs[0],
            "right": rights[0],
            "content": "false"
        },
        {
            "sub":subs[0],
            "right": rights[1],
            "content": "0"
        },
        {
            "sub":subs[0],
            "right": rights[2],
            "content": "false"
        },
        {
            "sub":subs[0],
            "right": rights[3],
            "content": "false"
        },
        {
            "sub":subs[1],
            "right": rights[0],
            "content": "true"
        },
        {
            "sub":subs[1],
            "right": rights[1],
            "content": "1"
        },
        {
            "sub":subs[1],
            "right": rights[2],
            "content": "false"
        },
        {
            "sub":subs[1],
            "right": rights[3],
            "content": "false"
        },
        {
            "sub":subs[2],
            "right": rights[0],
            "content": "true"
        },
        {
            "sub":subs[2],
            "right": rights[1],
            "content": "5"
        },
        {
            "sub":subs[2],
            "right": rights[2],
            "content": "true"
        },
        {
            "sub":subs[2],
            "right": rights[3],
            "content": "false"
        },
        {
            "sub":subs[3],
            "right": rights[0],
            "content": "true"
        },
        {
            "sub":subs[3],
            "right": rights[1],
            "content": "999"
        },
        {
            "sub":subs[3],
            "right": rights[2],
            "content": "true"
        },
        {
            "sub":subs[3],
            "right": rights[3],
            "content": "true"
        }
    ]

    baseLinks.forEach(async (item) => {
        const link = new SubscriptionRightsLink()
        link.content = item.content
        link.right = item.right
        link.subscription = item.sub
        await save(link)
    });

    
    // console.log(link);
    
    // ===== ==================================================================================================================

    //     console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
