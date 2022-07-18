import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeFormDialogComponent } from './employee-form-dialog/employee-form-dialog.component';
import { EmployeeAddDialogComponent } from './employee-add-dialog/employee-add-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  }
]

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormDialogComponent,
    ConfirmationDialogComponent,
    EmployeeAddDialogComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
