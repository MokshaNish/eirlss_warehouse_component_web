import { TransactionDetail } from './../Models/TransactionDetail';
import { Component, OnInit } from '@angular/core';
import { TransactionDetailService } from '../Services/transaction-detail.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor(private transactionDetailService : TransactionDetailService) { }

  transactionDetail = {}
  transdetail: TransactionDetail[]

  ngOnInit() {

    this.transactionDetailService.getAll().subscribe (transactionDetail => {
      
      this.transdetail = transactionDetail as TransactionDetail[];
      console.log(this.transdetail[1]);
    });

  }

}
