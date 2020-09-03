import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookademoComponent } from './bookademo.component';

describe('BookademoComponent', () => {
  let component: BookademoComponent;
  let fixture: ComponentFixture<BookademoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookademoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookademoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
