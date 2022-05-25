import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagprincipalComponent } from './pagprincipal.component';

describe('PagprincipalComponent', () => {
  let component: PagprincipalComponent;
  let fixture: ComponentFixture<PagprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
