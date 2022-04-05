import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroclientesComponent } from '../components/registroclientes/registroclientes.component';
import { EditarclientesComponent } from '../components/editarclientes/editarclientes.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from '../template/head/head.component';
import { NavbarComponent } from '../template/navbar/navbar.component';
import { FooterComponent } from '../template/footer/footer.component';


@NgModule({
  declarations: [
    RegistroclientesComponent,
    EditarclientesComponent,
    HeadComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
