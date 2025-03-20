import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatButton, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <span>Employee Management</span>
      <span style="flex: 1 1 auto;"></span>
      <button mat-button routerLink="/employees">Employees</button>
      <button mat-button routerLink="/departments">Departments</button>
    </mat-toolbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container { padding: 20px; max-width: 1200px; margin: 0 auto; }
  `]
})
export class AppComponent {
  title = 'Employee Management System';
}
