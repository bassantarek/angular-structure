import { Component, OnInit } from '@angular/core';
//for taranslation ==> 1
import { TranslateService } from '@ngx-translate/core';
import { AdminLayoutService } from '../admin-layout.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _translate: TranslateService,private _admin_layout_service: AdminLayoutService) {
    // For translation (here you'll add the name of your language BasanrAr and BasantEn)==> 2
    _translate.addLangs(['en', 'ar']);
    localStorage.getItem('lang') == null ? localStorage.setItem('lang', 'ar') : null;
    _translate.setDefaultLang(localStorage.getItem('lang')!);
  }
  toggleSidebar = () => this._admin_layout_service.toggleSidebar();

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this._translate.use(lang);
  }

}
