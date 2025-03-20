import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ isEditMode ? 'Edit' : 'Add' }} Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">
          <mat-form-field>
            <mat-label>Name</mat-label>
            <input matInput formControlName="name" required>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" required type="email">
          </mat-form-field>

          <mat-form-field>
            <mat-label>Phone</mat-label>
            <input matInput formControlName="phone">
          </mat-form-field>

          <mat-form-field>
            <mat-label>Salary</mat-label>
            <input matInput formControlName="salary" type="number">
          </mat-form-field>

          <mat-form-field>
            <mat-label>Department</mat-label>
            <mat-select formControlName="departmentId">
              @for (dept of departments; track dept.departmentId) {
                <mat-option [value]="dept.departmentId">{{ dept.name }}</mat-option>
              }
            </mat-select>
          </mat-form-field>

          <div class="button-row">
            <button mat-raised-button color="primary" type="submit" [disabled]="!employeeForm.valid">
              {{ isEditMode ? 'Update' : 'Create' }}
            </button>
            <button mat-button routerLink="/employees">Cancel</button>
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
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  departments: any[] = [];
  isEditMode = false;
  employeeId?: number;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      salary: ['', [Validators.required, Validators.min(0)]],
      departmentId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.employeeId = +id;
      this.loadEmployee(this.employeeId);
    }
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(deps => this.departments = deps);
  }

  loadEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe(emp => this.employeeForm.patchValue(emp));
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      if (this.isEditMode && this.employeeId) {
        this.employeeService.updateEmployee(this.employeeId, employee)
          .subscribe(() => this.router.navigate(['/employees']));
      } else {
        this.employeeService.createEmployee(employee)
          .subscribe(() => this.router.navigate(['/employees']));
      }
    }
  }
}
