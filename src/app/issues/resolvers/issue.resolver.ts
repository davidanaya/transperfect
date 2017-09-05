import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IssuesService } from '../services/issues.service';
import { IssueDetail } from '../models/issue-detail.model';

@Injectable()
export class IssueResolver {
  constructor(private issuesService: IssuesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IssueDetail> {
    return this.issuesService.getIssue(route.params['id']);
  }
}
