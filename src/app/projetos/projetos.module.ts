import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from './pipes/';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [ UsuarioComponent, FilterPipe ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [
    UsuarioComponent,
    FlexLayoutModule,
  ]
})
export class ProjetosModule { }
