import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Twhinh220Service } from 'src/services/twhinh220.service';
@Component({
  selector: 'app-twhinh220-popup',
  templateUrl: './twhinh220-popup.component.html',
  styleUrls: ['./twhinh220-popup.component.scss']
})
export class Twhinh220PopupComponent implements OnInit {
  addForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
  private service: Twhinh220Service,
  public dialogRef: MatDialogRef<Twhinh220PopupComponent>) {
    this.addForm = this.formBuilder.group({
      tOorg: ['', Validators.required],
      tOrno: ['', Validators.required],
      tOset: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.addForm.valid) {
      const formData = this.addForm.value;
      this.service.addTwhinh204(formData).subscribe(
        (res) => {
          this.addForm.reset();
          this.dialogRef.close();
        },
        (error) => {
          //error
        }
      )
      this.addForm.reset();
    }
  }
}
