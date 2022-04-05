import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroclientesComponent } from './registroclientes.component';

describe('RegistroclientesComponent', () => {
  let component: RegistroclientesComponent;
  let fixture: ComponentFixture<RegistroclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
