import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryComponent } from './subcategory.component';
import { RouterModule } from '@angular/router';
import { SubcategoryRoutingModule } from './subcategory-routing.module';



@NgModule({
  declarations: [
    SubcategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SubcategoryRoutingModule
  ]
})
export class SubcategoryModule { }
