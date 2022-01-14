import { Component, OnInit } from '@angular/core';
import { AdminLayoutService } from '../admin-layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _admin_layout_service: AdminLayoutService) { }

  ngOnInit(): void {
  }
  toggleSidebar = () => this._admin_layout_service.toggleSidebar();

  // toggleProfile () {
  //   const profileBody = document.querySelector('.profile-body');
  //   const toggleProfile = document.querySelector('.toggle-profile');
  // }
}
