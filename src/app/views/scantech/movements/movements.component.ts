import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movement } from 'src/models/movement'
import { MovementService } from 'src/services/movement.service'
import { MovementPopupComponent } from '../movement-popup/movement-popup.component';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent implements OnInit {
  list: Movement[] = [];
  movement!: Movement;
  constructor(private service: MovementService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getAllMovements().subscribe(data => {
      this.list = data;
      });
  }
  

  getMovement(id: number) {
    this.service.getMovementById(id).subscribe(data => {
      this.movement = data;
      console.log(this.movement);
  
      this.openMovementPopup(this.movement); // Pass the movement data to the dialog
    }, (error) => {
      // Handle error
    });
  }
  
  openMovementPopup(movement: Movement) {
    this.dialog.open(MovementPopupComponent, {
      width: '50%',
      height: '50%',
      data: movement, // Pass the movement object directly as the data
    });
  }
  
}
