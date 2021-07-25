import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SubcategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SubcategoryModule { }
