import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MovEstoque, MovEstoqueService, Produtos, ProdutosService } from '../shared';

interface tipoProduto {
  value: string;
  viewValue: string;
}

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
  reduced: any[] = [];
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
  selected(): void {
    while(this.tipoMov.length) {
      this.tipoMov.pop();
    }
    let colums = ["Produto", "Dispónivel", "Saida"];
    this.tipoMov.push(colums)
    // var reversed = this.movEstoque.reverse()
    this.arrayFormated(this.movEstoque);

    this.reduced.forEach( i => {
      if(this.tipo == i.produto.tipoProduto  ){
          this.disponivel = i.produto.quantidade
          this.saida = i.quantidadeMov;
        console.log(i)
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
  //   _array.forEach((item: any) => {
  //     console.log(item)
  //     if(item.tipoMov == 'Entrada'){
  //     var duplicated  = this.reduced.findIndex(redItem => {
  //         return item.produto.descricao == redItem.produto.descricao;
  //       }) > -1;
  //       if(!duplicated) {
  //           this.reduced.push(item);
  //       }
  //     }

  // });
  var novoArray: any[] = [];

// Aqui usamos o método do Javascript, forEach, presente nos arrays para percorrer os objetos
  _array.forEach(function(item){
    console.log(item)
      // Aqui vamos verificar através do método map, se a descrição já foi salva dentro do novoArray.
      var indice = novoArray.map(function(e) {
          return e.produto.descricao;
      }).indexOf(item.produto.descricao);

      // Se achamos, vamos nesse índice localizado, e concatenamos o ID ao já existente
      // Se não, usamos o método push, para atribuir o novo item ao novoArray.
      console.log(indice)
      if(indice >= 0) {
        if(item.tipoMov == "Entrada"){
          novoArray[indice].produto.quantidade = novoArray[indice].produto.quantidade + item.quantidadeMov;
          console.log( novoArray[indice].quantidadeMov  + item.quantidadeMov)
        } else{
          novoArray[indice].produto.quantidade = novoArray[indice].produto.quantidade - item.quantidadeMov;
          console.log( novoArray[indice].quantidadeMov  - item.quantidadeMov)
        }
      } else {
          novoArray.push(item);
      }
  });
  console.log(novoArray);
  this.reduced = novoArray;

   }
}


