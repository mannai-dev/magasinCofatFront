import { Component, OnInit } from '@angular/core';
import { Twhinh220 } from 'src/models/twhinh220'
import { Twhinh220Service } from 'src/services/twhinh220.service';
import { MatDialog } from '@angular/material/dialog';
import { Twhinh220PopupComponent } from 'src/app/views/ln/twhinh220-popup/twhinh220-popup.component'
import { Twhinh220DetailsComponent } from '../twhinh220-details/twhinh220-details.component';

@Component({
  selector: 'app-twhinh220120',
  templateUrl: './twhinh220120.component.html',
  styleUrls: ['./twhinh220120.component.scss']
})
export class Twhinh220120Component implements OnInit {
  list: Twhinh220[] = [];
  twinh220!: Twhinh220;
  constructor(private dialog: MatDialog,
    private service: Twhinh220Service) { }

  ngOnInit(): void {
    this.service.getAllTwhinh204().subscribe(res => {
      this.list = res;
    });
  }
  add() {
    this.dialog.open(Twhinh220PopupComponent, {
      width:'50%',
      height:'50%',
    });
  }
  openItemDetails(item: Twhinh220): void {
    const dialogRef = this.dialog.open(Twhinh220DetailsComponent, {
      width: '50%',
      height: '50%',
      data: item
    });
    console.log(item);
  }
}
