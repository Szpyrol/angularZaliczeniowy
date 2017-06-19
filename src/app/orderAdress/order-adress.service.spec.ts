/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderAdressService } from './order-adress.service';

describe('OrderAdressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderAdressService]
    });
  });

  it('should ...', inject([OrderAdressService], (service: OrderAdressService) => {
    expect(service).toBeTruthy();
  }));
});
