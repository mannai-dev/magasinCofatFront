import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Twhinh220 } from 'src/models/twhinh220';

@Component({
  selector: 'app-twhinh220-details',
  templateUrl: './twhinh220-details.component.html',
  styleUrls: ['./twhinh220-details.component.scss']
})
export class Twhinh220DetailsComponent implements OnInit {

  @Input() data!: Twhinh220;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Twhinh220,public dialogRef: MatDialogRef<Twhinh220DetailsComponent>) {
    this.data = dialogData;
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
   ngOnInit(): void {
    console.log(this.data);
  }
}
