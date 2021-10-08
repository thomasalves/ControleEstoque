import { Component, OnInit } from '@angular/core';
import { Produtos, MovEstoque, ProdutosService, MovEstoqueService } from '../shared';
import { Router } from '@angular/router';

interface tipoProduto {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {

  novoProduto: Produtos = {
    id: 0,
    descricao:'',
    tipoProduto: '',
    valorFornecedor: 0,
    quantidade: 0,
  }

  EntradaProduto: MovEstoque = {
    produto: this.novoProduto,
    tipoMov: 'Entrada',
    valorVenda: 0,
    dataVenda: new Date(),
    quantidadeMov: this.novoProduto.quantidade
  }

  constructor(private produtosService: ProdutosService,
    private router: Router, private movEstoqueService: MovEstoqueService) { }

  ngOnInit(): void {

  }

  tipoProduto: tipoProduto[] = [
    {value: 'Eletronico', viewValue: 'Eletrônico'},
    {value: 'Eletrodomestico', viewValue: 'Eletrodoméstico'},
    {value: 'Movel', viewValue: 'Móvel'}
  ];

  createProduto(): void {
    console.log(this.novoProduto)
    this.produtosService.create(this.novoProduto).subscribe(() => {
      this.createMovimentacao();
      // this.router.navigate(['/filmes'])

    })

  }
  createMovimentacao(): void {
    console.log(this.EntradaProduto)
    this.movEstoqueService.create(this.EntradaProduto).subscribe(() => {

      this.movEstoqueService.showMessage('Produto adicionado')
      // this.router.navigate(['/filmes'])

    })
  }

  cancel(): void {
    console.log('cancel')
    this.router.navigate(['/'])
  }

}
