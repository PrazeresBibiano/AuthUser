import { TestBed } from '@angular/core/testing';

import { FormBuilderInitService } from './form-builder-init.service';

describe('FormBuilderInitService', () => {
  let service: FormBuilderInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
