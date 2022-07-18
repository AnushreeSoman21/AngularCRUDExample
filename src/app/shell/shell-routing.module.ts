import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '', redirectTo: 'home',
      },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: 'employee', loadChildren: () => import('./employee/employee.module')
          .then(m => m.EmployeeModule), canActivate: [AuthGuard]
      }

      // { path: 'employee', component: HomeComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ShellRoutingModule { }
