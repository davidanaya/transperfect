import { Pipe, PipeTransform } from '@angular/core';

import { Issue } from '../models/issue.model';

@Pipe({
  name: 'issues'
})
export class IssuesPipe implements PipeTransform {

  transform(issues: Issue[], filterBy: string): Issue[] {
    if (!filterBy) {
      return issues;
    }
    return issues.filter(issue => issue.title.includes(filterBy));
  }

}
