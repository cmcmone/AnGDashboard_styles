import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()isMenuOpened: boolean = false;
  @Output() isShowSidebar = new EventEmitter<boolean>();

  openMenu():void{
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }
}