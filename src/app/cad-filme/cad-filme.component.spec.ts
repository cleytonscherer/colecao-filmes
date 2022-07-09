import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFilmeComponent } from './cad-filme.component';

describe('CadFilmeComponent', () => {
  let component: CadFilmeComponent;
  let fixture: ComponentFixture<CadFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
