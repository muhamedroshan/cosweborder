export class Product { 
    constructor(name,category,price,imageUrl,description,storageRef,tax){
        this.imageUrl = imageUrl
        this.productcategory = category
        this.productdescription = description
        this.productname = name
        this.productprice = price
        this.producttax = tax
        this.storageref = storageRef
    }
}

export const ProductsConverter = { 
    toFirestore:(Product)=>{
        return {
            imageUrl : Product.imageUrl,
            productcategory : Product.productcategory,
            productdescription: Product.productdescription,
            productname : Product.productname ,
            productprice : Product.productprice,
            producttax : Product.producttax,
            storageref : Product.storageref
        };
    },
    fromFirestore:(snapshot, options)=>{
        const data =  snapshot.data(options);
        return new Product(data.productname ,
            data.productcategory,
            data.productprice ,
            data.imageUrl,
            data.productdescription,
            data.storageref ,
            data.producttax)
    } 
 }