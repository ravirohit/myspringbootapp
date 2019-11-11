import { TestBed } from '@angular/core/testing';

import { ApiActionsService } from './api-actions.service';

describe('ApiActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiActionsService = TestBed.get(ApiActionsService);
    expect(service).toBeTruthy();
  });
});
