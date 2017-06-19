/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderSummaryService } from './order-summary.service';

describe('OrderSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderSummaryService]
    });
  });

  it('should ...', inject([OrderSummaryService], (service: OrderSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
