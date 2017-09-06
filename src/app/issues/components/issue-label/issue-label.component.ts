import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { IssueLabel } from '../../models/issue-label.model';

@Component({
  selector: 'tp-issue-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [style.backgroundColor]="color">
      {{ label.name }}
    </div>
  `,
  styleUrls: ['./issue-label.component.scss']
})
export class IssueLabelComponent {
  @Input() label: IssueLabel;

  get color() {
    return `#${this.label.color}`;
  }

}
