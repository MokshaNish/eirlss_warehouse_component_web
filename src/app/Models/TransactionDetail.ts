export class TransactionDetail {
    
    id : number;
    itemId : number;
    itemName : String;
    binId : number;
    status : String;
    minStockLevel :number;
    reOrderQunatity : number;

    constructor(){
        this.id = null;
        this.itemId = null;
        this.itemName = null;
        this.binId = null;
        this.status = null;
        this.minStockLevel = null;
        this.reOrderQunatity = null;

    }
}