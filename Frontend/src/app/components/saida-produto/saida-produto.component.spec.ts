import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaProdutoComponent } from './saida-produto.component';

describe('SaidaProdutoComponent', () => {
  let component: SaidaProdutoComponent;
  let fixture: ComponentFixture<SaidaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaidaProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
