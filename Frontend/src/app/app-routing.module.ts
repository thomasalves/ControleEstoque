import { EstoqueComponent } from './views/estoque/estoque.component';
import { SaidaProdutosComponent } from './views/saida-produtos/saida-produtos.component';
import { NovoProdutoComponent } from './views/novo-produto/novo-produto.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdutoComponent } from './views/add-produto/add-produto.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "novo-produto",
    component: NovoProdutoComponent
  },
  {
    path: "saida-produto",
    component: SaidaProdutosComponent
  },
  {
    path: "edit-produto",
    component: AddProdutoComponent
  },
  {
    path: "estoque",
    component: EstoqueComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
