import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-template',
    template: `
        <app-header-home></app-header-home>
        <router-outlet></router-outlet>
        home template

    `
})

export class HomeTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}