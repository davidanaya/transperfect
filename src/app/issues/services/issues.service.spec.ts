import { TestBed, inject } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IssuesService } from './issues.service';
import { ISSUES } from './issues.mock';

function createResponse(body) {
  return Observable.of(body);
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

describe('IssuesService', () => {
  let service: IssuesService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [IssuesService, { provide: HttpClient, useClass: MockHttp }]
    });

    http = bed.get(HttpClient);
    spyOn(http, 'get').and.returnValue(createResponse([...ISSUES]));

    service = bed.get(IssuesService);
  });

  it('should get the issues', () => {
    service.issues$.subscribe(result => {
      expect(result.length).toBe(ISSUES.length);
    });
  });

  it('should get one issue', () => {
    http.get = jasmine
      .createSpy('spy')
      .and.returnValue(createResponse(ISSUES[0]));
    service.getIssue(19065).subscribe(result => {
      expect(result.number).toBe(19065);
    });
  });
});
