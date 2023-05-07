export class Restaurnt { 
    constructor(companyAddress,companyName,email,restName,uid){
        this.companyAddress = companyAddress
        this.companyName = companyName
        this.email = email
        this.restName = restName
        this.uid = uid
    }
}

export const RestaurntConverter = { 
    toFirestore:(Restaurnt)=>{
        return {
            companyAddress : Restaurnt.companyAddress,
            companyName : Restaurnt.companyName,
            email : Restaurnt.email,
            restName: Restaurnt.restName,
            uid : Restaurnt.uid
        };
    },
    fromFirestore:(snapshot, options)=>{
        const data =  snapshot.data(options);
        return new Restaurnt(data.companyAddress,data.companyName,data.email ,data.restName,data.uid)
    } 
 }