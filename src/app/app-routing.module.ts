import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./core/components/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'admin',
    loadChildren: ()=> import('./components/admin/admin.module').then(m =>m.AdminModule),
    canActivateChild:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
