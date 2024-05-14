import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaPageComponent } from './pages/pessoa-page/pessoa-page.component';
import { PessoaAddPageComponent } from './pages/pessoa-add-page/pessoa-add-page.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoaPageComponent },
  { path: 'cadastro/pessoa', component: PessoaAddPageComponent },
  { path: 'cadastro/pessoa/:id', component: PessoaAddPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
