import { TestBed, inject } from '@angular/core/testing';

import { BookademomailerService } from './bookademomailer.service';

describe('BookademomailerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookademomailerService]
    });
  });

  it('should be created', inject([BookademomailerService], (service: BookademomailerService) => {
    expect(service).toBeTruthy();
  }));
});
