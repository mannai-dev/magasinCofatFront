//import { Component, Inject, Input, OnInit } from '@angular/core';
//import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Twhinh200 } from 'src/models/twhinh200';

@Component({
  selector: 'app-twhinh200-details',
  templateUrl: './twhinh200-details.component.html',
  styleUrls: ['./twhinh200-details.component.scss']
})
/* export class Twhinh200DetailsComponent implements OnInit {
  @Input() data!: Twhinh200 ;
 // @Input() data! : any;
  constructor(public dialogRef: MatDialogRef<Twhinh200DetailsComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.data = new Twhinh200();
    console.log(this.data.tAdat);
  }
}

*/
export class Twhinh200DetailsComponent implements OnInit {
  @Input() data!: Twhinh200 ;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Twhinh200,public dialogRef: MatDialogRef<Twhinh200DetailsComponent>) {
    this.data = dialogData;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
   ngOnInit(): void {
    console.log(this.data);
  }
}


