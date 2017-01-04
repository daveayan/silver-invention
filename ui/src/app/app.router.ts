import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { ClassDashboardComponent } from './pages/class-dashboard/class-dashboard.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'class',
        component: ClassDashboardComponent
    },
    {
        path: 'teacher',
        component: TeacherDashboardComponent
    },
    {
        path: 'student',
        component: StudentDashboardComponent
    }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
