import {  Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { breadcrumb } from './../models/breadcrumb.model'


export const ADD_LOCATION       = '[BREADCRUMB] ADD LOCATION'
export const ADD_BRANCH    = '[BREADCRUMB] ADD BRANCH'
export const ADD_CATEGORY    = '[BREADCRUMB] ADD CATEGORY'
export const ADD_SUBCAT       = '[BREADCRUMB] ADD SUBCAT'


export class AddLocation implements Action {
  readonly type = ADD_LOCATION;

  constructor(public payload: breadcrumb) {
  }
}


export class AddBranch implements Action {
  readonly type = ADD_BRANCH

  constructor(public payload: breadcrumb) {
  }
}


export class AddCategory implements Action {
  readonly type = ADD_CATEGORY

  constructor(public payload: breadcrumb) {
  }
}


export class AddSubCategory implements Action {
  readonly type = ADD_SUBCAT

  constructor(public payload: breadcrumb) {
  }
}

export type Actions = AddLocation | AddBranch | AddCategory | AddSubCategory
