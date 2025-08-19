import { Location, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteLink } from './routeLinkModel';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgFor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  public routes: RouteLink[] = [
    {title: "Home", route: "/", icon: "home", active: true},
    {title: "Cadastro de usuários", route: "/mfeCadastro", icon: "supervisor_account", active: false},
    {title: "Lista de usuários", route: "/mfeSucesso", icon: "view_headline", active: false}
  ]

  constructor(private location: Location) {
    this.location.onUrlChange(routeName => {
      this.routes.map(route => route.active = false);
      this.routes.find(route => route.route == routeName)!.active = true;
    });
  }
}
