import { MovEstoque } from './mov-estoque.model';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovEstoqueService {

  baseUrl = "http://localhost:3001/movEstoque"

  constructor(private snackBar: MatSnackBar,  private http: HttpClient) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"

    })
  }

  create(estoque: MovEstoque): Observable<MovEstoque> {
    return this.http.post<MovEstoque>(this.baseUrl, estoque)
  }

  read(): Observable<MovEstoque[]> {
    return this.http.get<MovEstoque[]>(this.baseUrl)
  }
}
