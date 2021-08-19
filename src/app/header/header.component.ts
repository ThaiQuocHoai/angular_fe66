import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <div class="app-header">Hello header!</div>
    `,
    styles:[`
        .app-header {
            background: red;
            color: white;
            padding: 50px 0;
            text-align: center;
        }
    `]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}