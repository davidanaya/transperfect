import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RouterLinkStubDirective } from 'testing/router-stubs';

import { IssuesListComponent } from './issues-list.component';
import { IssuesService } from '../../services/issues.service';
import { ISSUES_VM } from '../../services/issues.mock';
import { IssuesPipe } from '../../pipes/issues.pipe';
import { AuthorsPipe } from '../../pipes/authors.pipe';

class MockIssuesService {
  issues$ = Observable.of(ISSUES_VM);
}

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  let el: DebugElement;
  let service: IssuesService;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [IssuesListComponent, IssuesPipe, AuthorsPipe, RouterLinkStubDirective],
        providers: [{ provide: IssuesService, useClass: MockIssuesService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    service = el.injector.get(IssuesService);
    fixture.detectChanges();
  });

  it('should get list of issues on creation', () => {
    component.ngOnInit();
    expect(component.issues$).toBeTruthy();
  });
});
