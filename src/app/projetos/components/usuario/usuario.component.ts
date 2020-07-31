import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user = {} as User;
  users: User[];

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.userService.listarUsuarios().subscribe((usuarios: User[]) => {
      this.users = usuarios;
    });
  }

  getUsuariosPorLogin( login: string ): void {
    this.userService.listarUsuarioPorLogin( login ).subscribe((usuario: User) => {
      this.user = usuario;
    });
  }
}
