import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  userName: string = "Erick Sanchez";
  theme: string = "";
  widthMenu: number = 25;
  visibleMenu: boolean = true;

  setVisibilitiMenu(): void {
    this.visibleMenu = !this.visibleMenu;
    this.visibleMenu;
  }

  setVisibilitiBack(): void {
    this.visibleMenu = !this.visibleMenu;
    this.visibleMenu;
  }

  setThemeColor(color: string):void{
    this.theme = color;
  }

  setSizeMenu(){
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 25;
    }
  }
}
