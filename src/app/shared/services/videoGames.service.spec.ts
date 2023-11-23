/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoGamesService } from './videoGames.service';

describe('Service: VideoGames', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoGamesService]
    });
  });

  it('should ...', inject([VideoGamesService], (service: VideoGamesService) => {
    expect(service).toBeTruthy();
  }));
});
