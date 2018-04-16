
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <button (click)="example()"><i class="fa fa-rotate-left" aria-hidden="true"></i></button>
  `,
})
export class SelectStatutComponent implements OnInit {
  public renderValue;

  @Input() value;

  constructor() {  }

  ngOnInit() {
    this.renderValue = this.value;
  }

  example() {
    alert(this.renderValue);
  }
}
