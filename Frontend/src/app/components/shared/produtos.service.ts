import { Produtos } from './produtos.model';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl = "http://localhost:3001/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"

    })
  }

  create(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.baseUrl, produto)
  }

  read(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.baseUrl)
  }

  update(produto: Produtos): Observable<Produtos> {
    return this.http.put<Produtos>(this.baseUrl + '/' + produto.id, produto)
  }
}
