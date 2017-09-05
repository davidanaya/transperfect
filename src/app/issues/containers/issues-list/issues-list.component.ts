import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

import { IssuesService, Issue } from '../../services/issues.service';

@Component({
  selector: 'tp-issues-list',
  template: `
    <ul class="issues-list">
      <li class="list-item" *ngFor="let issue of issues$ | async">
        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        <div class="item-info">
          <h3 class="item-info__title">{{ issue.title }}</h3>
          <p class="item-info__subtitle">
            <span>#{{ issue.number }}</span>
            <span>Openened {{ this.getTimeSinceCreation(issue.createdAt) }} by {{ issue.user }}</span>
          </p>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  issues$: Observable<Issue>;

  constructor(private issuesService: IssuesService) {}

  ngOnInit() {
    this.issues$ = this.issuesService.issues$;
  }

  private getTimeSinceCreation(createdAt: string) {
    return moment(createdAt).fromNow();
  }
}
