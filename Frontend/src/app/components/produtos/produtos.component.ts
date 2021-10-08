import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProdutosService, Produtos } from '../shared';

// import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = [];
  displayedColumns  = ['Código', 'Descrição', 'Tipo de produto', 'Valor do Fornecedor', 'Quantidade']

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.produtosService.read().subscribe(produtos => {
      this.produtos= produtos
      console.log(produtos)
    })
  }

  addData(): void {
    this.router.navigate(['/novo-produto']);

  }
  editData(): void {
    this.router.navigate(['/saida-produto']);
  }
  newData(): void {
    this.router.navigate(['/edit-produto']);
  }
}
