import { Produtos } from '.';

export interface MovEstoque {

  id?: number
  produto: Produtos
  tipoMov: string
  valorVenda: number
  dataVenda: Date
  quantidadeMov: number

}
