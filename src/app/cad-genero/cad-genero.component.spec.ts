import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadGeneroComponent } from './cad-genero.component';

describe('CadGeneroComponent', () => {
  let component: CadGeneroComponent;
  let fixture: ComponentFixture<CadGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
