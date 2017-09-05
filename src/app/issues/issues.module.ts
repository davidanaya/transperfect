import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IssuesListComponent } from './containers/issues-list/issues-list.component';
import { IssueComponent } from './components/issue/issue.component';

const ROUTES: Routes = [
  { path: '', component: IssuesListComponent },
  { path: ':id', component: IssueComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [IssuesListComponent, IssueComponent]
})
export class IssuesModule {}
