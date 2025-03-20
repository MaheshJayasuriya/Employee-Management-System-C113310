import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'employees',
    loadComponent: () => import('./components/employee-list/employee-list.component')
      .then(m => m.EmployeeListComponent)
  },
  {
    path: 'employees/new',
    loadComponent: () => import('./components/employee-form/employee-form.component')
      .then(m => m.EmployeeFormComponent)
  },
  {
    path: 'employees/edit/:id',
    loadComponent: () => import('./components/employee-form/employee-form.component')
      .then(m => m.EmployeeFormComponent)
  },
  {
    path: 'departments',
    loadComponent: () => import('./components/department-list/department-list.component')
      .then(m => m.DepartmentListComponent)
  },
  {
    path: 'departments/new',
    loadComponent: () => import('./components/department-form/department-form.component')
      .then(m => m.DepartmentFormComponent)
  },
  {
    path: 'departments/edit/:id',
    loadComponent: () => import('./components/department-form/department-form.component')
      .then(m => m.DepartmentFormComponent)
  },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];
