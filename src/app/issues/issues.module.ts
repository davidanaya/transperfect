import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IssuesListComponent } from './containers/issues-list/issues-list.component';
import { IssueComponent } from './components/issue/issue.component';
import { IssuesService } from './services/issues.service';

const ROUTES: Routes = [
  { path: '', component: IssuesListComponent },
  { path: ':id', component: IssueComponent }
];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(ROUTES)],
  declarations: [IssuesListComponent, IssueComponent],
  providers: [IssuesService]
})
export class IssuesModule {}
