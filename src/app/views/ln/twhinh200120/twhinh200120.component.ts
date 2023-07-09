import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Twhinh120PopupComponent } from '../twhinh120-popup/twhinh120-popup.component';
import { Twhinh200 } from 'src/models/twhinh200';
import { Twhinh200Service } from 'src/services/twhinh200.service';
import { Twhinh200DetailsComponent } from '../twhinh200-details/twhinh200-details.component';

@Component({
  selector: 'app-twhinh200120',
  templateUrl: './twhinh200120.component.html',
  styleUrls: ['./twhinh200120.component.scss']
})
export class Twhinh200120Component implements OnInit {
  list: Twhinh200[] = [];
 // twhinh200!: Twhinh200;
  constructor( private service: Twhinh200Service,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllTwhinh200().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
    
  }

  randomAdd() {
    this.service.nextTwhinh200().subscribe(
      (res) => {
        // Success
      },
      (error) => {
        // Error
      }
    );
  }

  add() {
    this.dialog.open(Twhinh120PopupComponent, {
      width: '50%',
      height: '50%',
    });
  }
  openItemDetails(item: Twhinh200): void {
    const dialogRef = this.dialog.open(Twhinh200DetailsComponent, {
      width: '50%',
      height: '50%',
      data: item
    });
    console.log(item);
  }
  // openItemDetails(item: Twhinh200) {
  //   this.dialog.open(Twhinh200DetailsComponent, {
  //     width: '50%',
  //     height: '50%',
  //     data: item // Pass the movement object directly as the data
  //   });
  // }
 
  
}
 