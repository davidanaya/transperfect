import { Pipe, PipeTransform } from '@angular/core';

import { Issue } from '../models/issue.model';

@Pipe({
  name: 'authors'
})
export class AuthorsPipe implements PipeTransform {

  transform(issues: Issue[], author: string): Issue[] {
    if (!author) {
      return issues;
    }
    return issues.filter(issue => issue.user === author);
  }

}
