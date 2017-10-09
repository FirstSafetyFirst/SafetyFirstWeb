import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowItComponent } from './know-it.component';

describe('KnowItComponent', () => {
  let component: KnowItComponent;
  let fixture: ComponentFixture<KnowItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
