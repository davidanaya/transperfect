import { Component, OnInit, Input } from '@angular/core';

import { IssueLabel } from '../../models/issue-label.model';

@Component({
  selector: 'tp-issue-label',
  template: `
    <div [style.backgroundColor]="color">
      {{ label.name }}
    </div>
  `,
  styleUrls: ['./issue-label.component.scss']
})
export class IssueLabelComponent implements OnInit {
  @Input() label: IssueLabel;

  constructor() { }

  ngOnInit() {
  }

  get color() {
    return `#${this.label.color}`;
  }

}
