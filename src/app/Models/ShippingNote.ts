export class ShippingNote {
    
    id : number;
    itemId : number;
    quantity : number;
    shippingAddress : String;
    shippingMode : String;
    status:String;

    constructor(){

        this.id = null;
        this.itemId = null;
        this.quantity = null;
        this.shippingAddress = null;
        this.shippingMode = null;
        this.status = null;
    }

}