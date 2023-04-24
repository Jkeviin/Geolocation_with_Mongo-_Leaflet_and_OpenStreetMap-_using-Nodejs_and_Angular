import { TestBed } from '@angular/core/testing';

import { LavaderoService } from './lavadero.service';

describe('LavaderoService', () => {
  let service: LavaderoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LavaderoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
