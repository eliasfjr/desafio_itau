import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { User } from '../../../domain/user/user.model';
import { UserService } from '../../../services/user/user-service';

@Component({
  selector: 'app-user-list',
  imports: [NgFor],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {

  constructor(private userService: UserService) { }
  public users: User[] = [];

  public getUserList() {
    this.userService.getUsers()
      .subscribe(
        response => this.users = response
      )
  }

  public updateTitle(title: string, icon: string) {
    window.dispatchEvent(new CustomEvent("updateTitle", { detail: { title: title, icon:  icon} }));
  }

  public ngOnInit(): void {
    this.getUserList();
    this.updateTitle("Lista de usuários", "view_headline");
  }


}
