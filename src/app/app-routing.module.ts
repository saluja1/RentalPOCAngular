import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch/branch.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'location/:locationID', component: LocationComponent},
  {path: 'location/:locationID/branch/:branchID', component: BranchComponent},
  {path: 'location/:locationID/branch/:branchID/category/:categoryID', component: CategoryComponent},
  {path: 'location/:locationID/branch/:branchID/category/:categoryID/sub/:subID', component: SubcategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
