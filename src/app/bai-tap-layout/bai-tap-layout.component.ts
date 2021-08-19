import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-layout',
  template: `
    <div>
      <app-header></app-header>
      <div class="w-100">
        <div class="row">
          <div class="col-5">
            <app-left-layout></app-left-layout>
          </div>
          <div class="col-7">
            <app-right-layout></app-right-layout>
          </div>
        </div>
      </div>

      <app-footer-layout></app-footer-layout>
    </div>
  `,
  styles:[`
    .col-5, .col-7{
        padding: 0;
    }
  `]
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
