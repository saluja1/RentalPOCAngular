import { Action } from '@ngrx/store'
import { breadcrumb } from './../models/breadcrumb.model'

import * as BreadcrumbActions from './../action/breadcrumb.actions'

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';



const breadcrumbInitState: breadcrumb = <breadcrumb>{location: "",
  branch: "",
  category: "",
  subcat: ""  }

export function breadcrumbReducers(state = breadcrumbInitState, action: BreadcrumbActions.Actions ) {

  switch(action.type) {
    case BreadcrumbActions.ADD_LOCATION:
      var payloadData = action.payload;
      return {...state, ...payloadData};
    default:
      return state;
  }
}

