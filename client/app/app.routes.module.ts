import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

const routes: Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {}

/** 
 * 
 * 
 * 
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
 */
