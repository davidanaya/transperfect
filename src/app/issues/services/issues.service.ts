import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../../../environments/environment';

import { IssueDetail } from '../models/issue-detail.model';
import { Issue } from '../models/issue.model';
import { ISSUES } from './issues.mock';

@Injectable()
export class IssuesService {
  issues$ = this.http
    .get<any>(`${environment.api}/issues`)
    .map(res => res.json())
    .map(issues => issues.map(issue => this.issueToViewModel(issue)));

  // issues$ = Observable.of(ISSUES).map(issues => issues.map(issue => this.issueToViewModel(issue)));

  constructor(private http: HttpClient) {}

  getIssue(id: number): Observable<IssueDetail> {
    return this.http
      .get<any>(`${environment.api}/issues/${id}`)
      .map(res => res.json())
      .map(issue => this.issueToViewModelDetail(issue));
  }

  private issueToViewModelDetail(issue: any): IssueDetail {
    return Object.assign(
      {},
      {
        number: issue.number,
        title: issue.title,
        state: issue.state,
        createdAt: issue.created_at,
        user: issue.user.login,
        comments: issue.comments,
        asignees: issue.asignees,
        labels: issue.labels,
        body: issue.body
      }
    );
  }

  private issueToViewModel(issue: any): Issue {
    return Object.assign(
      {},
      {
        url: issue.url,
        id: issue.id,
        number: issue.number,
        title: issue.title,
        state: issue.state,
        createdAt: issue.created_at,
        user: issue.user.login
      }
    );
  }
}
