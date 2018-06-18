import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListairportsComponent } from './listairports.component';

describe('ListairportsComponent', () => {
  let component: ListairportsComponent;
  let fixture: ComponentFixture<ListairportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListairportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListairportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
