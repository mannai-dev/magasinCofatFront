import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Twhinh200Service } from 'src/services/twhinh200.service';
@Component({
  selector: 'app-twhinh120-popup',
  templateUrl: './twhinh120-popup.component.html',
  styleUrls: ['./twhinh120-popup.component.scss']
})
export class Twhinh120PopupComponent implements OnInit {
  addForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
    private service: Twhinh200Service,
    public dialogRef: MatDialogRef<Twhinh120PopupComponent>) {
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
      this.service.addTwhinh200(formData).subscribe(
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
