//import { Component, OnInit } from '@angular/core';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Twhinh204 } from 'src/models/twhinh204';

@Component({
  selector: 'app-twhinh204-details',
  templateUrl: './twhinh204-details.component.html',
  styleUrls: ['./twhinh204-details.component.scss']
})
export class Twhinh204DetailsComponent implements OnInit {

  @Input() data!: Twhinh204 ;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Twhinh204,public dialogRef: MatDialogRef<Twhinh204DetailsComponent>) {
    this.data = dialogData;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
   ngOnInit(): void {
    console.log(this.data);
  }
}
