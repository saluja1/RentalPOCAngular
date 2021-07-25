import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
	breadCrumbData:any;
  constructor(public store:Store<[]>) { }

  ngOnInit(): void {
    this.store.select((data)=> data['braedCrumbData'] ).subscribe( (dataX) => this.breadCrumbData = dataX )
    console.log(this.breadCrumbData);        
  }

}
