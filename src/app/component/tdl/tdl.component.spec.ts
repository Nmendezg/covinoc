import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdlComponent } from './tdl.component';

describe('TdlComponent', () => {
  let component: TdlComponent;
  let fixture: ComponentFixture<TdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
