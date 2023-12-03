import { TestBed } from '@angular/core/testing';

import { ShareSelectItemService } from './share-select-item.service';

describe('ShareSelectItemService', () => {
  let service: ShareSelectItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareSelectItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
