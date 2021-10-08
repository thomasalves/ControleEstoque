import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Produtos, ProdutosService, MovEstoqueService, MovEstoque } from '../shared';


@Component({
  selector: 'app-saida-produto',
  templateUrl: './saida-produto.component.html',
  styleUrls: ['./saida-produto.component.css']
})
export class SaidaProdutoComponent implements OnInit {
  myControl = new FormControl();
  options: Produtos[] = [];
  quantidade!: number;
  venda!: number;


  constructor(
     private produtosService: ProdutosService,
     private MovEstoque: MovEstoqueService,
     private router: Router) { }

  ngOnInit() {
    this.produtosService.read().subscribe(produtos => {
      this.options= produtos;
    })
  }

  saidaProduto() :void {
    this.options.forEach(opt => {
      if(opt.descricao == this.myControl.value && this.quantidade < opt.quantidade){
        let atualizarProduto: Produtos = {
          id: opt.id ,
          descricao: opt.descricao,
          tipoProduto: opt.tipoProduto,
          valorFornecedor: opt.valorFornecedor,
          quantidade: (opt.quantidade - this.quantidade)
        }
        let data = new Date;
        let estoque: MovEstoque = {
          produto: atualizarProduto,
          tipoMov: "Saída",
          valorVenda: this.venda,
          dataVenda: data,
          quantidadeMov: this.quantidade
        }
        this.produtosService.update(atualizarProduto).subscribe()
        this.MovEstoque.create(estoque).subscribe(() => {
          this.produtosService.showMessage("Movimentação de Saida realizada");
        });
        console.log(atualizarProduto)
      } else {
        console.log('qui')
        this.MovEstoque.showMessage("Quantidade não disponivel em estoque")
      }

    })
  }


  cancel(): void {
    this.router.navigate(['/'])
  }
}

