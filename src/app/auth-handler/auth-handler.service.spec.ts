/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthHandlerService } from './auth-handler.service';

describe('AuthHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthHandlerService]
    });
  });

  it('should ...', inject([AuthHandlerService], (service: AuthHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
