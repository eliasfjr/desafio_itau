import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  public updateTitle(title: string, icon: string) {
    window.dispatchEvent(new CustomEvent("updateTitle", { detail: { title: title, icon: icon } }));
  }

  public ngOnInit(): void {
    this.updateTitle("Home", "home");
  }

}
