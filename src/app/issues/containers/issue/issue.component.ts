import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { IssueDetail } from '../../models/issue-detail.model';

@Component({
  selector: 'tp-issue',
  template: `
    <div class="issue" *ngIf="issue$ | async as issue">
      <div class="title">
        <h2>{{ issue.title }}</h2>
        <span class="title__number">#{{ issue.number }}</span>
      </div>
      <div class="subtitle">
        <div class="subtitle__state {{ issue.state }}">{{ issue.state }}</div>
        <div class="subtitle__description">&nbsp;{{ getSubtitle(issue) }}</div>
        <div class="subtitle__comments">&nbsp;&#183; {{ issue.comments }} comments</div>
      </div>
      <div class="body">
        <div class="description" [innerHTML]="issue.body | htmlSafe"></div>
        <div class="sidebar">
          <div class="sidebar__asignees">
            <div class="label">Asignees</div>
              <ng-container *ngIf="issue.asignees; else no_asignees">
                {{ issue.asignees }}
              </ng-container>
              <ng-template #no_asignees>
                No one assigned
              </ng-template>
          </div>
          <div class="sidebar__labels">
            <div class="label">Labels</div>
              <tp-issue-label *ngFor="let label of issue.labels" [label]="label">
              </tp-issue-label>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  issue$: Observable<IssueDetail>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.issue$ = this.route.data.map(value => value.issue);
  }

  private getTimeSinceCreation(createdAt: string) {
    return moment(createdAt).fromNow();
  }

  private getSubtitle(issue: any): string {
    return `${issue.user} opened this issue ${this.getTimeSinceCreation(issue.created_at)}`;
  }
}
