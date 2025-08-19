import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  imports: [],
  templateUrl: './layout-header.html',
  styleUrl: './layout-header.scss'
})
export class LayoutHeader implements OnInit, OnDestroy {

  public title: string = "Home";
  public icon: string = "home";

  public ngOnInit(): void {
    window.addEventListener("updateTitle", (event: Event) => {
      const customEvent = event as CustomEvent;
      this.title = customEvent?.detail?.title;
      this.icon = customEvent?.detail?.icon;
    });
  }

  public ngOnDestroy(): void {
    window.removeEventListener("updateTitle",  (event: Event) => {});
  }
}
