import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {

  constructor() { }

  toggleSidebar () {
    let sidebar = document.getElementById('sidebar');
    let system_content = document.getElementById('system_content');
    sidebar?.classList.toggle('active')
    system_content?.classList.toggle('active')
    console.log("Service is working!!!!!!!!")
  }
  
}
