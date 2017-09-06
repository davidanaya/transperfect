import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DebugElement } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IssueComponent } from './issue.component';
import { IssueLabelComponent } from '../../components/issue-label/issue-label.component';
import { HtmlPipe } from '../../pipes/html.pipe';
import { IssueDetail } from '../../models/issue-detail.model';

const ISSUE: IssueDetail = {
  number: 19064,
  title: 'docs(aio): change Stack Overflow link',
  user: 'sarunint',
  state: 'open',
  createdAt: '2017-09-06T04:42:47Z',
  comments: 0,
  asignees: [],
  labels: [],
  body: ''
};

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;
  let el: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IssueComponent, IssueLabelComponent, HtmlPipe],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: { data: Observable.of({ issue: ISSUE }) }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should get data upon creation', () => {
    component.ngOnInit();
    component.issue$.subscribe(issue => {
      expect(issue).toBe(ISSUE);
    });
  });
});
