import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html'
})
export class MenuLoginComponent {

  token: string = "";
  user: any;
  email: string = "";

  constructor(private router: Router) {  }

  usuarioLogado(): boolean {

    if (this.user)
      this.email = this.user.email;

    return this.token !== null;
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
