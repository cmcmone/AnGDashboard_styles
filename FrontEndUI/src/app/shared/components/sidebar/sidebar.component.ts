import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpenUiElements:boolean = false;
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
