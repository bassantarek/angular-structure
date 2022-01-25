import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentContainerComponent } from './layout-component/layout/content-container/content-container.component';



@NgModule({
  declarations: [
    ContentContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ContentContainerComponent
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContentContainerComponent
  ]
})
export class SharedModule { }
