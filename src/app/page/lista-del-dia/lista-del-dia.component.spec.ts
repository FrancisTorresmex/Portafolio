import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDelDiaComponent } from './lista-del-dia.component';

describe('ListaDelDiaComponent', () => {
  let component: ListaDelDiaComponent;
  let fixture: ComponentFixture<ListaDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDelDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
