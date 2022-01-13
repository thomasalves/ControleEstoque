import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MovEstoque, MovEstoqueService, Produtos, ProdutosService, tipoProduto } from '../shared';

declare var google: any;
@Component({
  selector: 'app-mov-estoque',
  templateUrl: './mov-estoque.component.html',
  styleUrls: ['./mov-estoque.component.css']
})
export class MovEstoqueComponent implements OnInit {

  tipo!: string;
  disponivel!: number;
  saida!: number;
  movEstoque: MovEstoque[] = [];
  produto: Produtos[] = []
  tipoMov : Array<{}> = []
  myControl = new FormControl();
  graficoArray: any[] = [];
  tipoProduto: tipoProduto[] = [
    {value: 'Eletronico', viewValue: 'Eletrônico'},
    {value: 'Eletrodomestico', viewValue: 'Eletrodoméstico'},
    {value: 'Movel', viewValue: 'Movel'}
  ];
  reversed: any;
  constructor(private movEstoqueServoce: MovEstoqueService, private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.movEstoqueServoce.read().subscribe(movEstoque => {
      this.movEstoque= movEstoque;
      this.init()
    })
    this.produtoService.read().subscribe(produto=> {
      this.produto= produto;
      this.init()
    })
  }

  init(): void {
    if(typeof(google) !== 'undefined'){
      google.charts.load('current', { 'packages' : ['bar']});
    }
  }
  selectedTipoProduto(): void {
    while(this.tipoMov.length) {
      this.tipoMov.pop();
    }
    let colums = ["Produto", "Dispónivel", "Saida"];
    this.tipoMov.push(colums)
    this.arrayFormated(this.movEstoque);
    this.graficoArray.forEach( i => {
      if(this.tipo == i.produto.tipoProduto  ){
        this.disponivel = i.produto.quantidade
        this.saida = i.quantidadeMov;
        this.tipoMov.push([i.produto.descricao.toUpperCase() , this.disponivel, this.saida]);
        setTimeout(() => {
          google.charts.setOnLoadCallback(this.exibirBarChart());
        }, 1000);
      }
    })
  }

  exibirBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart =  new google.charts.Bar(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes())
    }

  obterOpcoes(): any {
    return {
      chart: {
        title: 'Gráfico desmostrativo de produtos disponivel e saidas',
      },
      bars: 'horizontal' // Required for Material Bar Charts.
    };
  };


  obterDataTable(): any {
    const data = new google.visualization.arrayToDataTable(this.tipoMov);
    return data;
    }


  arrayFormated(_array: MovEstoque[]) :void{
    var novoArray: any[] = [];
    _array.forEach(function(item){
      var indice = novoArray.map(function(e) {
          return e.produto.descricao;
      }).indexOf(item.produto.descricao);

      if(indice >= 0) {
        item.tipoMov == "Entrada" ? novoArray[indice].produto.quantidade = novoArray[indice].produto.quantidade + item.quantidadeMov :
                                    novoArray[indice].produto.quantidade = novoArray[indice].produto.quantidade - item.quantidadeMov;
      } else {
          novoArray.push(item);
      }
    });
    this.graficoArray = novoArray;

    }
}


