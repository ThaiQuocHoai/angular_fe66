import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-right-layout',
    template: `
        <div class="right">
            left
        </div>
    `,

    styles: [`
        .right{
            color: white;
            background-color: blue;
            text-align: center;
            padding: 200px 0;
        }
    `]  
})

export class RightComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}