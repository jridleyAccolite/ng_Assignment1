import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  { 
    path: '',   
    redirectTo: '/registration', 
    pathMatch: 'full' 
  },
  {
    path: 'users',
    component: UsersComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

