import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCardsComponent } from './graph-cards.component';

describe('GraphCardsComponent', () => {
  let component: GraphCardsComponent;
  let fixture: ComponentFixture<GraphCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
