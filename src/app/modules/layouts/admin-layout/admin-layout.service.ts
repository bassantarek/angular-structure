import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  constructor() { }

  toggleSidebar () {
    let sidebar = document.getElementById('sidebar');
    let header = document.getElementById('header');
    sidebar?.classList.toggle('active')
    header?.classList.toggle('active')
    console.log("Service is working!!!!!!!!",sidebar )
    console.log("Service is working!!!!!!!!",header )
  }
  
}
