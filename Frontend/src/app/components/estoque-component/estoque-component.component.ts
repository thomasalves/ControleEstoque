import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovEstoque, MovEstoqueService, ProdutosService, Produtos } from '../shared';

declare var google: any;

@Component({
  selector: 'app-estoque-component',
  templateUrl: './estoque-component.component.html',
  styleUrls: ['./estoque-component.component.css']
})
export class EstoqueComponentComponent implements OnInit {

  venda: number = 0;
  compra: number = 0;
  lucro: number = 0;
  movEstoque: MovEstoque[] = [];
  options: Produtos[] = []
  lucroMov : Array<{}> = []
  quantidade: number = 0;
  formAnswers = new FormControl();

  constructor(private movEstoqueServoce: MovEstoqueService, private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.movEstoqueServoce.read().subscribe(movEstoque => {
      this.movEstoque= movEstoque;
    })
    this.produtoService.read().subscribe(produto => {
      this.options = produto
    })
    this.init();
  }
  init(): void {
    if(typeof(google) !== 'undefined'){
      google.charts.load('current', { 'packages' : ['bar']});
    }
  }

  selected(): void {
    while(this.lucroMov.length) {
      this.lucroMov.pop();
    }
    this.lucro = 0;
    this.compra = 0;
    this.quantidade = 0;
    this.venda = 0;
    let colums = ["Produto", "Lucro", "Saida", ];
    this.lucroMov.push(colums)
    this.movEstoque.forEach(i => {
      if (i.produto.descricao === this.formAnswers.value){
        if(i.tipoMov === 'Saída'){
          this.venda =  i.valorVenda + this.venda;
          this.quantidade =  i.quantidadeMov + this.quantidade
        } else {
          this.compra = this.compra + i.produto.valorFornecedor
        }
      }
    })
    this.lucro = this.venda - this.compra
    this.lucroMov.push([this.formAnswers.value.toUpperCase() , this.lucro, this.quantidade]);
    setTimeout(() => {
      google.charts.setOnLoadCallback(this.exibirBarChart());
    }, 1000);
  }

  exibirBarChart(): void {
    const el = document.getElementById('barChartTipoProduto');
    const chart =  new google.charts.Bar(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes())
   }
   obterOpcoes(): any {
    return {
      height: 500,
      chart: {
        title: 'Gráfico desmostrativo de lucro por quantidade vendida',
      },
      bars: 'vertical',
      series: {
        0: { axis: 'Lucro'},
        1: { axis: 'Quantidade', format: 'decimal', scrollbars: 10},

      },
      axes: {
        y: {
          Quantidade: {label: 'Quantidade Vendida',format: 'decimal' },
          Lucro: {side: 'left', label: 'Valor em R$', format: 'currency'},

        }
      },
      bar: { groupWidth: "100%" }
    };
  };


  obterDataTable(): any {
    const data = new google.visualization.arrayToDataTable(this.lucroMov);
    return data;
   }

}
