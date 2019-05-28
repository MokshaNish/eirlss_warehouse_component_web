import { Component, OnInit } from '@angular/core';
import { SupplierGood } from '../Models/SupplierGood';

@Component({
  selector: 'app-supplier-goods',
  templateUrl: './supplier-goods.component.html',
  styleUrls: ['./supplier-goods.component.css']
})
export class SupplierGoodsComponent implements OnInit {

  suppliergoods : SupplierGood[];
  checkedItems : SupplierGood[];

  constructor() { }

  ngOnInit() {
    this.suppliergoods = [{id :1, itemId: 1 , supplierId : 1 ,itemName: "itemname 01", itemPrice: 200, quantity:10 },
  {id : 2, itemId: 2 , supplierId : 2 ,itemName: "itemname 02", itemPrice: 1000, quantity:20 }]
  
  }

  //isChecked(isTrue:boolean, id:number){
    //console.log(isTrue, id)
    //console.log(this.suppliergoods.find(i=> i.id == id))
    //let element = this.suppliergoods.find(i=> i.id == id);
      //if(isTrue){
        //this.checkedItems.push(element);
      //}else{        
        //this.checkedItems.splice(this.checkedItems.indexOf(element), 1);
      //}
  //}

}
