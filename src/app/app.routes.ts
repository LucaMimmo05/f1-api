import { Routes } from '@angular/router';
import { Home } from './home/home';
import { GranPremi } from './gran-premi/gran-premi';
import { GranPremio } from './gran-premio/gran-premio';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'gran-premi',
        component: GranPremi,
        title: 'Gran Premi'
    },
    {
        path: 'gran-premio/:id',
        component: GranPremio,
        title: 'Gran Premio'
    }

];
