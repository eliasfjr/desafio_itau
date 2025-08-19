import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'mfeCadastro',
        loadComponent: () => loadRemoteModule('mfeCadastro', './Component')
            .then((m) => m.NewUser)
    },
    {
        path: 'mfeSucesso',
        loadComponent: () => loadRemoteModule('mfeSucesso', './Component')
            .then((m) => m.UserList)
    }
];
