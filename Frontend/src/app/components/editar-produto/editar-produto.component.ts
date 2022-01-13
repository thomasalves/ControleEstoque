import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MovEstoque, MovEstoqueService, Produtos, ProdutosService } from '../shared';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  formAnswers = new FormControl();
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
      if(opt.descricao == this.formAnswers.value){
        let atualizarProduto: Produtos = {
          id: opt.id ,
          descricao: opt.descricao,
          tipoProduto: opt.tipoProduto,
          valorFornecedor: opt.valorFornecedor,
          quantidade: (opt.quantidade + this.quantidade)
        }
        let data = new Date;
        let estoque: MovEstoque = {
          produto: atualizarProduto,
          tipoMov: "Entrada",
          valorVenda: 0,
          dataVenda: data,
          quantidadeMov: this.quantidade
        }
        this.produtosService.update(atualizarProduto).subscribe()
        this.MovEstoque.create(estoque).subscribe(() => {
          this.produtosService.showMessage("Movimentação de Entrada realizada com sucesso");
        });
        console.log(atualizarProduto)
      }

    })
  }
  cancel(): void {
    this.router.navigate(['/'])
  }
}
