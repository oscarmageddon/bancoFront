import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarclientesComponent } from './editarclientes.component';

describe('EditarclientesComponent', () => {
  let component: EditarclientesComponent;
  let fixture: ComponentFixture<EditarclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
