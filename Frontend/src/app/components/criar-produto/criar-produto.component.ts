import { Component, OnInit } from '@angular/core';
import { Produtos, MovEstoque, ProdutosService, MovEstoqueService, tipoProduto  } from '../shared';
import { Router } from '@angular/router';
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

  tipoProduto: tipoProduto[] = [
    {value: 'Eletronico', viewValue: 'Eletrônico'},
    {value: 'Eletrodomestico', viewValue: 'Eletrodoméstico'},
    {value: 'Movel', viewValue: 'Móvel'}
  ];

  constructor(private produtosService: ProdutosService,
    private router: Router, private movEstoqueService: MovEstoqueService) { }

  ngOnInit(): void {}


  createProduto(): void {
    console.log(this.novoProduto)
    this.produtosService.create(this.novoProduto).subscribe(() => {
      this.createMovimentacao();
    })

  }
  createMovimentacao(): void {
    console.log(this.EntradaProduto)
    this.movEstoqueService.create(this.EntradaProduto).subscribe(() => {
      this.movEstoqueService.showMessage('Produto adicionado')
    })
  }

  cancel(): void {
    console.log('cancel')
    this.router.navigate(['/'])
  }

}
