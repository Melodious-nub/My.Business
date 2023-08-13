import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  username !: string;
  password !: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    const loggedIn = this.auth.login(this.username, this.password);
    if (loggedIn) {
      // Navigate to admin dashboard or some protected route
      this.router.navigate(['/admin']);
    } else {
      // Show some error message
      alert('Invalid credentials!');
    }
  }

}
