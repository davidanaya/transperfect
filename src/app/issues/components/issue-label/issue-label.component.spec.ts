import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { IssueLabelComponent } from './issue-label.component';

const LABEL = {
  id: 1,
  url: 'my-url',
  name: 'my-label',
  color: 'FFFFFF',
  default: true
};

describe('IssueLabelComponent', () => {
  let component: IssueLabelComponent;
  let fixture: ComponentFixture<IssueLabelComponent>;
  let el: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IssueLabelComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueLabelComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.label = LABEL;

    fixture.detectChanges();
  });

  it(`should create a div element with background-color '#${LABEL.color}'`, () => {
    expect(el.query(By.css('div')).styles.backgroundColor).toBe(`#${LABEL.color}`);
  });

  it(`should create a div element with innerHTML to contain '${LABEL.name}'`, () => {
    const nativeElement = el.query(By.css('div')).nativeElement as HTMLElement;
    expect(nativeElement.innerHTML).toContain(LABEL.name);
  });
});
