import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodataComponent } from './addtodata.component';

describe('AddtodataComponent', () => {
  let component: AddtodataComponent;
  let fixture: ComponentFixture<AddtodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
