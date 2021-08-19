import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-layout',
    template: `
        <div class="footer">
            footer
        </div>
    `,
    styles: [`
        .footer{
            color:white;
            background: black;
            padding: 50px 0;
            text-align: center;
        }

    `]
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}