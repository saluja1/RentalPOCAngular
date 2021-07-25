import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { map, filter } from "rxjs/operators";
import  *  as  data  from  '../assets/catalog.json';
import * as AddLocations from './action/locations.actions'
import * as BreadCrumbActions from './action/breadcrumb.actions'
import { Store, select } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private store: Store<[]>, private http: HttpClient) { }

  getLocations(){
    return this.http.get<[]>("../assets/catalog.json");
    // this.store.dispatch(new AddLocations.AddLocations({locations: this.locations.data.locations}) );
  }
  addLocations(locationsData:[]){
    this.store.dispatch(new AddLocations.AddLocations({locations: locationsData}) );
  } 
  getBranches(locationID): Observable<any>{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    return locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID)));    
  }

  getCategories(locationID , branchID): Observable<any>{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    return locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ))));    
  }

  getSubCategories(locationID , branchID, categoryID): Observable<any>{
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    locationsData = locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ))));    
    return locationsData.pipe(map( x =>  x.map(data => data.map( dataX => dataX["categories"].filter((dataF) => dataF["name"] == categoryID) ))))
  }

  getSubCategoryData(locationID , branchID, categoryID, subID){
    var locationsData = this.store.select((data)=> data['locationsData'].locations )
    locationsData = locationsData.pipe( map(x => x.filter(x => x["dealers_id"]==locationID).map(x => x["branches"].filter( (data)=> data["branch_id"] == branchID ))));    
    return locationsData.pipe(map( x => x.map(data => data.map( dataX => dataX["categories"].filter((dataF) => dataF["name"] == categoryID) ).map( (dataC)=> dataC.map((dataSc) => dataSc["subcategories"].filter((dataSC) => dataSC["name"] == subID) ) )      )))
  }

  addBreadcrumbs(location = "", branch="", category="", subcat=""){
    this.store.dispatch(new BreadCrumbActions.AddLocation(
      { location, branch, category, subcat}
      ) 
    );
  }

}
