import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'demo', loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule), canActivate: [AuthGuard] }

];
// const routes: Routes = [

//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'Login',
//         pathMatch: 'full'
//       },
//       {
//         path: 'login',
//         component: LoginComponent,
//       },
//       {
//         path: 'demo',
//         loadChildren: () => import('./shell/shell.module').then(x => x.ShellModule),
//         canActivate: [AuthGuard]
//       }
//     ]
//   },

//   // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
