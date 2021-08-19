import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-layout',
    template: `
        <div class="left">
            left
        </div>
    `,

    styles: [`
        .left{
            color: white;
            background-color: green;
            text-align: center;
            padding: 200px 0;
        }
    `]  
})

export class LeftComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}