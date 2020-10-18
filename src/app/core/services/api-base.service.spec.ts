import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiBaseService } from './api-base.service';

describe('ApiBaseService', () => {
  let apiBaseService: ApiBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    apiBaseService = TestBed.inject(ApiBaseService);
  });

  it('should be created', () => {
    expect(apiBaseService).toBeTruthy();
  });
});
