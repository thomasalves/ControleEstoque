import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaProdutosComponent } from './saida-produtos.component';

describe('SaidaProdutosComponent', () => {
  let component: SaidaProdutosComponent;
  let fixture: ComponentFixture<SaidaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaidaProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaidaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
