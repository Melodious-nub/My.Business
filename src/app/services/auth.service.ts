import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // In a real-world scenario, you'll call an API here.
    // For this example, if the username is 'admin' and password is 'password', authentication will succeed.
    if (username === 'admin' && password === 'admin123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
