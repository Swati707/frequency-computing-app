import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFrequencyComponent } from './word-frequency.component';

describe('WordFrequencyComponent', () => {
  let component: WordFrequencyComponent;
  let fixture: ComponentFixture<WordFrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
