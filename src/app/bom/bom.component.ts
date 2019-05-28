import { BomService } from './../Services/bom.service';
import { MasterStockRecordService } from './../Services/master-stock-record.service';
import { MasterStockRecord } from './../Models/MasterStockRecord';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BomComponent implements OnInit {

  bomList =[] = [];
  //masterStock: MasterStockRecord[]=[];
  masterStock= {};
  myDate = Date.now();
  
  

  constructor( private masterStockRecordService:MasterStockRecordService,
                private bomService:BomService ) { }

  ngOnInit() {

    this.bomList = [{ id: 1, itemId: 1, itemName:"Bicycle Handles", quantity: 10  },{ id: 2, itemId: 2, itemName:"Wheels", quantity: 20}]
  }

  updateQuantity(masterStock: MasterStockRecord ){
    for(let i=0; i<this.bomList.length ; i++){
      let bom = this.bomList[i];
      bom.quantity = masterStock.quantity;
      this.masterStockRecordService.qtyUpdate(bom);
    }
  }

  public recordDetailsAll() {

    this.bomService.recordBOMDetails(this.bomList).subscribe(data => {
      console.log(data);
    });

  }
}
