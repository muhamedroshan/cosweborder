export class BilledProduct {
    constructor(imageUrl,
        productcategory,
        productdescription,
        productname,
        unitprice,
        producttax,
        storageref,
        quantity){
            this.imageUrl = imageUrl
            this.productcategory = productcategory
            this.productdescription = productdescription
            this.productname = productname
            this.productprice = unitprice * quantity
            this.unitprice = unitprice
            this.producttax = producttax
            this.storageref = storageref
            this.quantity = quantity
        }

        getNewProductPrice(){
            return (this.quantity * this.unitprice).toFixed(3)
        }

        getProductPriceWithTax(){
            return (this.productprice * this.producttax / 100).toFixed(3)
        }

        addQuantity(){
            this.quantity = this.quantity + 1
            this.productprice = this.getNewProductPrice()
        }

        lessQuantity(funToRemove){
            this.quantity = this.quantity -1
            this.productprice = this.getNewProductPrice()
            if(this.quantity <= 0){
                funToRemove()
            }
        }
}