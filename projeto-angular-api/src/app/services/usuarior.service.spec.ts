import { TestBed } from '@angular/core/testing';

import { UsuariorService } from './usuarior.service';

describe('UsuariorService', () => {
  let service: UsuariorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
