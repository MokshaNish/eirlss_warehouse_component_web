import { ItemDetailService } from './../Services/item-detail.service';
import { ItemDetail } from './../Models/ItemDetail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterStockRecord } from '../Models/MasterStockRecord';
import { MasterStockRecordService } from '../Services/master-stock-record.service';


@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {

  itemDetail: MasterStockRecord = new MasterStockRecord();
  id;

  constructor(private masterStockRecordService: MasterStockRecordService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {

      this.masterStockRecordService.get(this.id).subscribe(itemDetail => {
        console.log(itemDetail);
  
       this.itemDetail = itemDetail;
       
  
      });

    }
  }

  AddItem() {
    this.itemDetail.status = "Avaiable";
    console.log(this.itemDetail);
    this.masterStockRecordService.AddItem(this.itemDetail).subscribe(data => {
      console.log(data);
    }
    );
  }

}
