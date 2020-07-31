import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UsuarioComponent } from './components/usuario/usuario.component';



@NgModule({
  declarations: [UserComponent, UsuarioComponent],
  imports: [
    CommonModule
  ]
})
export class ProjetosModule { }
