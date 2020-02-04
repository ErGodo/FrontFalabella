import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderrentaComponent } from './headerrenta.component';

describe('HeaderrentaComponent', () => {
  let component: HeaderrentaComponent;
  let fixture: ComponentFixture<HeaderrentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderrentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderrentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
