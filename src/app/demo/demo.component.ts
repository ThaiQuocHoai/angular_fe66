import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',// ten the
  templateUrl: './demo.component.html',// duong dan den file chua giao dien html
  styleUrls: ['./demo.component.css']//duong dan den file css
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
