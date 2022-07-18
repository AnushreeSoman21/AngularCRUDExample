import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../Model/person';

@Component({
  selector: 'app-employee-form-dialog',
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.css']
})
export class EmployeeFormDialogComponent implements OnInit {
  formInstance: FormGroup;
  constructor(public dialogRef: MatDialogRef<EmployeeFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person) {
    this.formInstance = new FormGroup({
      "id": new FormControl('', Validators.required),
      "firstName": new FormControl('', Validators.required),
      "age": new FormControl('', [Validators.required, Validators.pattern("^[+]?\d*$")]),
      "job": new FormControl('', Validators.required),
    });
    if (data != null) {
      this.formInstance.setValue(data);
    }
  }

  ngOnInit(): void {
  }
  save(): void {
    this.dialogRef.close(Object.assign(new Person(), this.formInstance.value));
  }
}
