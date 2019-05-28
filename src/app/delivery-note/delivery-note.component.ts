import { ShippingNoteService } from './../Services/shipping-note.service';
import { Component, OnInit } from '@angular/core';
import { ShippingNote } from '../Models/ShippingNote';

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.css']
})
export class DeliveryNoteComponent implements OnInit {

  shippingNote = {}
  shipnote: ShippingNote[] = [];
  completedOrders: ShippingNote[] = [];

  constructor(private shippingNoteService: ShippingNoteService) { }

  ngOnInit() {

    this.shippingNoteService.getAll().subscribe(shippingNote => {
      this.shipnote = shippingNote as ShippingNote[];
      console.log(this.shipnote[1]);


    });

  }

  compleyedOrders(itemSelected, id) {
    let s = this.shipnote.find(i => i.itemId == id);
    if (itemSelected) {
      this.completedOrders.push(s);
    }

    console.log(this.completedOrders);

  }

  updateStatus() {
    for (let i = 0; i < this.completedOrders.length; i++) {
      let item = this.completedOrders[i];
      item.status = "Completed";
      this.shippingNoteService.updateShip(item);
    }

  }
}
