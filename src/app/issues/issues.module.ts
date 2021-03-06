import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// containers
import { IssuesListComponent } from './containers/issues-list/issues-list.component';
import { IssueComponent } from './containers/issue/issue.component';

// components
import { IssueLabelComponent } from './components/issue-label/issue-label.component';

// services & resolvers
import { IssuesService } from './services/issues.service';
import { IssueResolver } from './resolvers/issue.resolver';
import { HtmlPipe } from './pipes/html.pipe';
import { IssuesPipe } from './pipes/issues.pipe';
import { AuthorsPipe } from './pipes/authors.pipe';

const ROUTES: Routes = [
  { path: '', component: IssuesListComponent },
  {
    path: ':id',
    component: IssueComponent,
    resolve: {
      issue: IssueResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    IssuesListComponent,
    IssueComponent,
    IssueLabelComponent,
    HtmlPipe,
    IssuesPipe,
    AuthorsPipe
  ],
  providers: [IssuesService, IssueResolver]
})
export class IssuesModule {}
