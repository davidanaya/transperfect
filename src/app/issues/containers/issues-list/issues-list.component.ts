import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'tp-issues-list',
  template: `
    <div class="issues-container" *ngIf="issues$; else no_issues">
      <ul class="issues-list">
        <li class="list-item" *ngFor="let issue of issues$ | async">
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
  issues$: Observable<Issue>;

  constructor(private issuesService: IssuesService) {}

  ngOnInit() {
    this.issues$ = this.issuesService.issues$;
  }

  private getSubtitle(issue: Issue): string {
    return `Opened ${this.getTimeSinceCreation(issue.createdAt)} by ${issue.user}`;
  }

  private getTimeSinceCreation(createdAt: string) {
    return moment(createdAt).fromNow();
  }

  private getRoute(issue: Issue) {
    return [`./${issue.number}`];
  }
}
