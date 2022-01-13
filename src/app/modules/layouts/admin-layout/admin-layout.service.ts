import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  constructor() { }

  toggleSidebar () {
    let sidebar = document.getElementById('sidebar');
    let header = document.getElementById('header');
    let system_content = document.getElementById('system_content');
    sidebar?.classList.toggle('active')
    header?.classList.toggle('active')
    system_content?.classList.toggle('active')
    console.log("Service is working!!!!!!!!",sidebar )
    console.log("Service is working!!!!!!!!",sidebar )
    console.log("Service is working!!!!!!!!",system_content )
  }
  
}
