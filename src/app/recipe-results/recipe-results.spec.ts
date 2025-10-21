import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeResults } from './recipe-results';

describe('RecipeResults', () => {
  let component: RecipeResults;
  let fixture: ComponentFixture<RecipeResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
