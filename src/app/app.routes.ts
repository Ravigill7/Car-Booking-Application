import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Dasboard } from './Pages/dasboard/dasboard';
import { Booking } from './Pages/booking/booking';
import { Customer } from './Pages/customer/customer';
import { Layout } from './Pages/layout/layout';
import { Vehicle } from './Pages/vehicle/vehicle';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',        
                component: Dasboard    
            },
            {
                path: 'booking',
                component: Booking
            },
            {
                path: 'customer',
                component: Customer
            },
            {
                path: 'vehicle',
                component: Vehicle
            }
        ]
    }
];
