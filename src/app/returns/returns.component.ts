import { Component, OnInit } from '@angular/core';
import { ReturnItemNote } from '../Models/ReturnItemNote';
import { ReturnItemNoteService } from '../Services/return-item-note.service';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {

returnItem: ReturnItemNote[] = [];

  constructor(private returnItemNoteService:ReturnItemNoteService) { }

  ngOnInit() {
    
    this.returnItemNoteService.getAll().subscribe (returnNote => {
      this.returnItem = returnNote as ReturnItemNote[];
      
      
    });


  }

}
