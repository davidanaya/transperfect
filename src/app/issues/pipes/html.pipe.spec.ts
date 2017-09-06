import { HtmlPipe } from './html.pipe';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('HtmlPipe', () => {
  let pipe: HtmlPipe;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [HtmlPipe, DomSanitizer]
    });
    pipe = bed.get(HtmlPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
