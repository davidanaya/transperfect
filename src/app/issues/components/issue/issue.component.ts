import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tp-issue',
  template: `
    <pre>{{ issue | json }}</pre>
  `,
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  @Input() issue: any;

  constructor() {}

  ngOnInit() {}
}
