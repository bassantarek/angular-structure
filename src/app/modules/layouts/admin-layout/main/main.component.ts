import { Component, OnInit } from '@angular/core';
//for taranslation ==> 1
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _translate: TranslateService) {
    // For translation (here you'll add the name of your language BasanrAr and BasantEn)==> 2
    _translate.addLangs(['en', 'ar']);
    localStorage.getItem('lang') == null ? localStorage.setItem('lang', 'ar') : null;
    _translate.setDefaultLang(localStorage.getItem('lang')!);
  }

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this._translate.use(lang);
  }

}
