import { TestBed } from '@angular/core/testing';

import { EnviarRentaService } from './enviar-renta.service';

describe('EnviarRentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviarRentaService = TestBed.get(EnviarRentaService);
    expect(service).toBeTruthy();
  });
});
