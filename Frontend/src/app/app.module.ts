import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MovEstoqueComponent } from './components/mov-estoque/mov-estoque.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { MenuComponent } from './components/menu/menu.component';
import { NovoProdutoComponent } from './views/novo-produto/novo-produto.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule }from'@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SaidaProdutoComponent } from './components/saida-produto/saida-produto.component';
import { SaidaProdutosComponent } from './views/saida-produtos/saida-produtos.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EstoqueComponent } from './views/estoque/estoque.component';
import { EstoqueComponentComponent } from './components/estoque-component/estoque-component.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { AddProdutoComponent } from './views/add-produto/add-produto.component'



@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    MovEstoqueComponent,
    MenuComponent,
    CriarProdutoComponent,
    HomeComponent,
    NovoProdutoComponent,
    SaidaProdutoComponent,
    SaidaProdutosComponent,
    EstoqueComponent,
    EstoqueComponentComponent,
    EditarProdutoComponent,
    AddProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
