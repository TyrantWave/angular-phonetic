import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-phonetic',
  template: `
    <ruby>
      <ng-content></ng-content> <rp>{{left}}</rp> <rt>{{phonetic}}</rt><rp>{{right}}</rp>
    </ruby>
  `,
  styles: []
})
export class AngularPhoneticComponent implements OnInit {

  @Input() phonetic: string;
  @Input() brackets = '()';
  left: string;
  right: string;

  ngOnInit() {
    const parsed = this.parseBrackets();
    this.left = parsed[0];
    this.right = parsed[1];
  }

  private parseBrackets(): [string, string] {
    switch (this.brackets.length) {
      case 0:
        return ['', ''];
      case 1:
        return [this.brackets, this.brackets];
      default:
        return [this.brackets[0], this.brackets[1]];
    }
  }

}
