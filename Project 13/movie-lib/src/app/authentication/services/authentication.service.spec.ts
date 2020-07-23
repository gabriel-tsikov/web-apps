import { TestBed, fakeAsync } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call post with correct authenitcations', fakeAsync(() => {
    
    service.loginUser('admin@admin.com', 'adminpass');

    expect().nothing();

  }));
  
});
