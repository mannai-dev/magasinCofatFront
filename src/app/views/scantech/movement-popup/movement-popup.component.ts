import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movement } from 'src/models/movement';

@Component({
  selector: 'app-movement-popup',
  templateUrl: './movement-popup.component.html',
  styleUrls: ['./movement-popup.component.scss']
})
export class MovementPopupComponent implements OnInit {
  data: Movement;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Movement) {
    this.data = dialogData;
  }

  ngOnInit(): void {
  }
}
