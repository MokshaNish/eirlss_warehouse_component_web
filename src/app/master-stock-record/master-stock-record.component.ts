import { MasterStockRecord } from './../Models/MasterStockRecord';
import { Component, OnInit } from '@angular/core';
import { MasterStockRecordService } from '../Services/master-stock-record.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master-stock-record',
  templateUrl: './master-stock-record.component.html',
  styleUrls: ['./master-stock-record.component.css']
})
export class MasterStockRecordComponent implements OnInit {

  stockItem : MasterStockRecord[] = [];
  selectedItem: MasterStockRecord[] =[];
 

  constructor(private masterStockRecordService:MasterStockRecordService ) { }

  ngOnInit() {

    
    this.masterStockRecordService.getAll().subscribe (masterStock => {
      this.stockItem = masterStock as MasterStockRecord[];
      
    });

    }

    itemSelected(itemSelected, id){
      let s = this.stockItem.find(s => s.id == id);
      if(itemSelected){
        this.selectedItem.push(s);
        
      }
      console.log(this.selectedItem);
   
   
    }

    deleteItem(){
      for(let i=0; i<this.selectedItem.length ; i++){
        let item = this.selectedItem[i];
        item.status = "Archived";
        item.binId = 0;
        this.masterStockRecordService.archiveItem(item);
    }
    }

    
  }
