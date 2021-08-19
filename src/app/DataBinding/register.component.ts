import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
        <div class="register-form">
            <h3>Register form</h3>
            <div>
                <div class="form-group">
                    <p>Email:</p>
                    <input type="text" class="form-control" [(ngModel)]="email" >
                </div>
                <div class="form-group">
                    <p>Fullname:</p>
                    <input type="text" class="form-control" #inputName >
                </div>
                <div class="form-group">
                    <button class="btn btn-success" (click)="handleName(inputName.value)">Submit</button>
                </div>
            </div>
            <p>Email: {{email}}</p>
            <p>Fullname: {{name}}</p>
        </div>
    `
})

export class RegisterComponent implements OnInit {
    email:string ='';
    name:string='';

    handleName = (newName:string) => {
      this.name = newName;
    }


    constructor() { }

    ngOnInit() { }
}