import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-directive',
  template: `
  <h3>Bai tap 5</h3>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand" href="#">CyberSoft</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

          <li class="nav-item" *ngIf="isLogin; else divLogin">
            <span>Hello ! {{ username.value }}, </span>
            <a class="nav-link" href="#" (click)="dangXuat()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <ng-template #divLogin>
      <li class="nav-item">
        <a class="nav-link" data-toggle="modal" data-target="#modelId" href="#"
          >Login</a
        >
      </li>
    </ng-template>

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <p>Tài khoản</p>
              <input class="form-control" #username />
            </div>
            <div class="form-group">
              <p>Mật khẩu</p>
              <input type="password" class="form-control" #password />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              (click)="checkLogin(username.value, password.value)"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>

    <script>
      $('#exampleModal').on('show.bs.modal', (event) => {
        var button = $(event.relatedTarget);
        var modal = $(this);
        // Use above variables to manipulate the DOM
      });
    </script>
  `,
})
export class LoginDirectiveComponent implements OnInit {
  isLogin: boolean = false;

  checkLogin = (username: string, password: string) => {
    if (username === 'cybersoft' && password === 'cybersoft') {
      this.isLogin = true;
    } else{
        alert('Dang nhap that bai');
    }
  };

  dangXuat = () => {
    this.isLogin = false;
  };

  constructor() {}

  ngOnInit() {}
}
