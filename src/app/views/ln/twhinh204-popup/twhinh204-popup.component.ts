import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Twhinh204Service } from 'src/services/twhinh204.service';
@Component({
  selector: 'app-twhinh204-popup',
  templateUrl: './twhinh204-popup.component.html',
  styleUrls: ['./twhinh204-popup.component.scss']
})
export class Twhinh204PopupComponent implements OnInit {
  addForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
  private service: Twhinh204Service,
  public dialogRef: MatDialogRef<Twhinh204PopupComponent>) {
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
