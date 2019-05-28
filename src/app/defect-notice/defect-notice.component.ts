import { DefectNotice } from './../Models/DefectNotice';
import { DefectnoticeService } from './../Services/defectnotice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-defect-notice',
  templateUrl: './defect-notice.component.html',
  styleUrls: ['./defect-notice.component.css']
})
export class DefectNoticeComponent implements OnInit {

  defectNoticeList = [] =[];

  constructor(private defectnoticeService: DefectnoticeService) { }

  ngOnInit() {

    this.defectNoticeList = [{ id: 1, itemId: 1, supplierId: 1, itemName: "itemname 01", removedQuantity: 20 },
    { id: 2, itemId: 2, supplierId: 2, itemName: "itemname 02", removedQuantity: 10 },
    { id: 3, itemId: 3, supplierId: 3, itemName: "itemname 03", removedQuantity: 30 },
    { id: 4, itemId: 4, supplierId: 4, itemName: "itemname 04", removedQuantity: 40 }]


  }
 

  public recordDetails(defectNotice) {

    this.defectnoticeService.recordDetails(defectNotice).subscribe(data => {
      console.log(data);
    });

  }

  public recordDetailsAll() {

    this.defectnoticeService.recordDetailsAll(this.defectNoticeList).subscribe(data => {
      console.log(data);
    });

    
  }


}
