import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRecipesComponent } from './pizza-recipes.component';

describe('PizzaRecipesComponent', () => {
  let component: PizzaRecipesComponent;
  let fixture: ComponentFixture<PizzaRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
