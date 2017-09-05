import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

export interface Issue {
  url: string;
  id: number;
  number: number;
  title: string;
  state: string;
  createdAt: string;
  user: string;
}

@Injectable()
export class IssuesService {
  issues$ = this.http
    .get<any>(`${environment.api}/issues`)
    .map(issues => issues.map(issue => this.issueToViewModel(issue)));

  constructor(private http: HttpClient) {}

  private issueToViewModel(issue: any): Issue {
    return Object.assign({}, {
      url: issue.url,
      id: issue.id,
      number: issue.number,
      title: issue.title,
      state: issue.state,
      createdAt: issue.created_at,
      user: issue.user.login
    });
  }
}
