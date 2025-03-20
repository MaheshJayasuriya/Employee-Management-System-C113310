import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ isEditMode ? 'Edit' : 'Add' }} Department</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="departmentForm" (ngSubmit)="onSubmit()">
          <mat-form-field>
            <mat-label>Name</mat-label>
            <input matInput formControlName="name" required>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Location</mat-label>
            <input matInput formControlName="location" required>
          </mat-form-field>

          <div class="button-row">
            <button mat-raised-button color="primary" type="submit" [disabled]="!departmentForm.valid">
              {{ isEditMode ? 'Update' : 'Create' }}
            </button>
            <button mat-button routerLink="/departments">Cancel</button>
          </div>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    form { display: flex; flex-direction: column; gap: 16px; padding: 16px; }
    .button-row { display: flex; gap: 8px; justify-content: flex-end; }
  `]
})
export class DepartmentFormComponent implements OnInit {
  departmentForm: FormGroup;
  isEditMode = false;
  departmentId?: number;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.departmentId = +id;
      this.loadDepartment(this.departmentId);
    }
  }

  loadDepartment(id: number): void {
    this.departmentService.getDepartment(id).subscribe(dept => 
      this.departmentForm.patchValue(dept)
    );
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      const department = this.departmentForm.value;
      if (this.isEditMode && this.departmentId) {
        this.departmentService.updateDepartment(this.departmentId, department)
          .subscribe(() => this.router.navigate(['/departments']));
      } else {
        this.departmentService.createDepartment(department)
          .subscribe(() => this.router.navigate(['/departments']));
      }
    }
  }
}
