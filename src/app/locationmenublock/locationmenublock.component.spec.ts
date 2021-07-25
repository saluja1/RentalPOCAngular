import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationmenublockComponent } from './locationmenublock.component';

describe('LocationmenublockComponent', () => {
  let component: LocationmenublockComponent;
  let fixture: ComponentFixture<LocationmenublockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationmenublockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationmenublockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
