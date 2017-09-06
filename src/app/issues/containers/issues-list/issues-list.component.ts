import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'tp-issues-list',
  template: `
    <div class="issues-container" *ngIf="issues$; else no_issues">
      <input
        class="issues-filter-box"
        type="text"
        placeholder="filter by title"
        [(ngModel)]="title">
      <select [(ngModel)]="user">
        <option value="">Filter by author</option>
        <option *ngFor="let user of users$ | async" [value]="user">
          {{ user }}
        </option>
     </select>
      <div class="issues-info">There are {{ (issues$ | async)?.length }} issues</div>
      <ul class="issues-list">
        <li class="list-item" *ngFor="let issue of issues$ | async | issues:title | authors:user">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          <div class="item-info">
            <h3 class="item-info__title">
              <a [routerLink]="getRoute(issue)">{{ issue.title }}</a>
            </h3>
            <p class="item-info__subtitle">
              <span>
                #{{ issue.number }}
              </span>
              <span>
                {{ getSubtitle(issue) }}
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <ng-template #no_issues>
      <i class="fa fa-spinner" aria-hidden="true">Loading issues...</i>
    </ng-template>
  `,
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  issues$: Observable<Issue[]>;
  users$: Observable<string[]>;
  title: string;
  user = '';

  constructor(private issuesService: IssuesService) {}

  ngOnInit() {
    this.issues$ = this.issuesService.issues$;
    this.users$ = this.issues$
      .map(issues => issues.map(issue => issue.user))
      .map(users =>
        users
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .filter((user, index, array) => !index || user !== array[index - 1])
      );
  }

  private getSubtitle(issue: Issue): string {
    return `Opened ${this.getTimeSinceCreation(
      issue.createdAt
    )} by ${issue.user}`;
  }

  private getTimeSinceCreation(createdAt: string) {
    return moment(createdAt).fromNow();
  }

  private getRoute(issue: Issue) {
    return [`./${issue.number}`];
  }
}
