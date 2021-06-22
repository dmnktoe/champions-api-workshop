import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsCardComponent } from './champions-card.component';

describe('ChampionsCardComponent', () => {
  let component: ChampionsCardComponent;
  let fixture: ComponentFixture<ChampionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
