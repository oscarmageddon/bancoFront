import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarclientesComponent } from '../components/editarclientes/editarclientes.component';
import { RegistroclientesComponent } from '../components/registroclientes/registroclientes.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registroclientes',
        component: RegistroclientesComponent
      },
      {
        path: 'editarclientes',
        component: EditarclientesComponent
        
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
