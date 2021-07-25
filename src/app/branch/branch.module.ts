import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BranchModule { }
