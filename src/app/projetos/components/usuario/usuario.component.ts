import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Repositorio } from './../../models/repositorio.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  user = {} as User;
  users: User[];

  favUsers: User[] = [];
  searchText = '';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private route: ActivatedRoute
  )
  {
    this.users = new Array<User>();
  }

  ngOnInit(): void {
    this.listarUsuarios();
    this.favUsers = JSON.parse(localStorage.getItem('favoritos')) ? JSON.parse(localStorage.getItem('favoritos')) : [] ;
  }

  listarUsuarios(): void {
    this.userService.listarUsuarios().subscribe((usuarios: User[]) => {
      this.users = usuarios;
    });
  }

  listarUsuariosPorLogin( login: string ): void {
    this.userService.listarUsuarioPorLogin( login ).subscribe((usuario: User) => {
      this.user = usuario;
    });
  }

  // getFavoritos(): User[] {
  //   return this.userService.listarFavoritos();
  // }

  addFavorito( user: User ): void {
    this.favUsers.includes(user) ? '' : this.favUsers.push(user);
    localStorage.setItem('favoritos', JSON.stringify(this.favUsers));
  }

  removeFavorito( user: User ): void {
    this.favUsers = this.favUsers.filter( obj => obj.id !== user.id );
    localStorage.setItem('favoritos', JSON.stringify(this.favUsers));
  }
}
