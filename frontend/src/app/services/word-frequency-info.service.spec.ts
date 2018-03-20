import { TestBed, inject } from '@angular/core/testing';

import { WordFrequencyInfoService } from './word-frequency-info.service';

describe('WordFrequencyInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordFrequencyInfoService]
    });
  });

  it('should be created', inject([WordFrequencyInfoService], (service: WordFrequencyInfoService) => {
    expect(service).toBeTruthy();
  }));
});
