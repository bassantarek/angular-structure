import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  btn!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  // const btn = (id: string): HTMLElement => document.getElementById(id);

  viewSubMenu() {
    let arrow = document.querySelector('.arrow');
    let subMenu = document.querySelector('.sub-menu');
    subMenu?.classList.toggle("showMenu")
    console.log("showMenu", arrow)
  }
}
