import { Component, OnInit } from '@angular/core';
import { Twhinh204 } from 'src/models/twhinh204'
import { Twhinh204Service } from 'src/services/twhinh204.service';
import { MatDialog } from '@angular/material/dialog';
import { Twhinh204PopupComponent } from 'src/app/views/ln/twhinh204-popup/twhinh204-popup.component'
import { Twhinh204DetailsComponent } from '../twhinh204-details/twhinh204-details.component';


@Component({
  selector: 'app-twhinh204120',
  templateUrl: './twhinh204120.component.html',
  styleUrls: ['./twhinh204120.component.scss']
})
export class Twhinh204120Component implements OnInit {
  list: Twhinh204[] = [];
  twinh204!: Twhinh204;
  constructor(private dialog: MatDialog,
    private service: Twhinh204Service) { }

  ngOnInit(): void {
    this.service.getAllTwhinh204().subscribe(res => {
      this.list = res;
    });
  }
  randomAdd() {
    this.service.nextTwhinh204().subscribe(res => {
      //success
    }, (error) => {
      //error
    });
  }
  add() {
    this.dialog.open(Twhinh204PopupComponent, {
      width:'50%',
      height:'50%',
    });
  }

  openItemDetails(item: Twhinh204): void {
    const dialogRef = this.dialog.open(Twhinh204DetailsComponent, {
      width: '50%',
      height: '50%',
      data: item
    });
    console.log(item);
  }
}
