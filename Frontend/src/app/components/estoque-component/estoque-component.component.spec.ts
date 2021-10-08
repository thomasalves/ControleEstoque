import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueComponentComponent } from './estoque-component.component';

describe('EstoqueComponentComponent', () => {
  let component: EstoqueComponentComponent;
  let fixture: ComponentFixture<EstoqueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
