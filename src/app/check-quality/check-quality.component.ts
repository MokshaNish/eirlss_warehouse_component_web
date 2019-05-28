import { SupplierGoodsService } from './../Services/supplier-goods.service';
import { GoodReceivedNotice } from './../Models/GoodsReceivedNotice';
import { Component, OnInit } from '@angular/core';
import { GoodsreceivedService } from '../Services/goodsreceived.service';
import { SupplierGood } from '../Models/SupplierGood';
import { GoodRejectionNotice } from '../Models/GoodsRejectionNotice';

@Component({
  selector: 'app-check-quality',
  templateUrl: './check-quality.component.html',
  styleUrls: ['./check-quality.component.css']
})
export class CheckQualityComponent implements OnInit {

  constructor(private goodsreceivedService: GoodsreceivedService,
              private supplierGoodsService: SupplierGoodsService) { }

  // goodsreceived = {}
  supgoods: SupplierGood[] = [];
  goodItems: GoodReceivedNotice [] = [];
  badItems: GoodRejectionNotice[] = [];
  // selectedItem: SupplierGood[] = [];
  // selectedItem: GoodReceivedNotice[] = [];
  // notSelectedItem: SupplierGood[] = [];

  ngOnInit() {

    this.supplierGoodsService.getAll().subscribe(supplierGoods => {

      this.supgoods = supplierGoods as SupplierGood[];
      // console.log(this.supgoods[1]);

      this.addtoGoodItem();
    });

  }

  addtoGoodItem() {

    this.supgoods.forEach(s => {
      let goodReceivedNotice: GoodReceivedNotice = new GoodReceivedNotice();
      goodReceivedNotice.id = s.id;
      goodReceivedNotice.itemId = s.itemId;
      goodReceivedNotice.itemName = s.itemName;
      goodReceivedNotice.quantity = s.quantity;

      this.goodItems.push(goodReceivedNotice);
    });

    // console.log(this.goodItems);
  }

  // itemSelected(itemSelected, s) {

  //   if (itemSelected) {

  //     let goodReceivedNotice: GoodReceivedNotice = new GoodReceivedNotice();

  //     goodReceivedNotice.id = s.id;
  //     goodReceivedNotice.itemId = s.itemId;
  //     goodReceivedNotice.itemName = s.itemName;
  //     goodReceivedNotice.quantity = s.quantity;

  //     this.selectedItem.push(goodReceivedNotice);
  //   }
  //       // console.log(itemSelected);
  //   // console.log(s);

  // }

  public addBinAndSave() {

    console.log(this.goodItems);

    //var item = <GoodReceivedNotice> new Object();
    //for(int i=0;i<=this.goodItems.length;i++){
      //item.id = this.goodItems[i].id;
    //}
    
    this.goodsreceivedService.addGoodItems(this.goodItems).subscribe(data => {
      console.log(data);
    });
  }

  minusSupGoods(s) {

    let index = this.goodItems.findIndex(item => item.itemId === s.itemId);

    let currentQty = this.supgoods[index].quantity;
    let newQty = currentQty - 1;
    this.supgoods[index].quantity = newQty;
    this.goodItems[index].quantity = newQty;
    // console.log(index);

  }



  addSupGoods(s) {

    let index = this.goodItems.findIndex(item => item.itemId === s.itemId);
    
    let currentQty = this.supgoods[index].quantity;
    let newQty = currentQty + 1;
    this.supgoods[index].quantity = newQty;
    this.goodItems[index].quantity = newQty;
    // console.log(newQty);
  }

  diffCheck(){
    this.supgoods.forEach(supGood => {
      this.goodItems.forEach(goodItem =>{

        if(supGood.itemId == goodItem.itemId){
          let diffQty = goodItem.quantity - supGood.quantity;

          let goodRejectionNotice: GoodRejectionNotice = new GoodRejectionNotice();

          goodRejectionNotice.id = goodItem.id;
          goodRejectionNotice.itemId = goodItem.itemId;
          goodRejectionNotice.itemName = goodItem.itemName;
          goodRejectionNotice.quantity = diffQty;

          this.badItems.push(goodRejectionNotice);
        }
      })
    });

    console.log(this.badItems);
  }




}

