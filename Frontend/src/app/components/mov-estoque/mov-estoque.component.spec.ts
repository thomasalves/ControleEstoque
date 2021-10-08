import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovEstoqueComponent } from './mov-estoque.component';

describe('MovEstoqueComponent', () => {
  let component: MovEstoqueComponent;
  let fixture: ComponentFixture<MovEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
