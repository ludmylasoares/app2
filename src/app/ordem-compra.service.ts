import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { retry, catchError, map} from 'rxjs/operators'

import { URL_API } from './app.api'

import { Pedido } from './shared/pedido.model'

@Injectable({providedIn: 'root'})

export class OrdemCompraService {
  // URL_API = 'http://localhost:3000/'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers - cabeçalhos
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Efetivar compra
  efetivarCompra(pedido: Pedido): Observable<number> { 
      //console.log(pedido)
    return this.httpClient.post<Pedido>(
        `${URL_API}/pedidos`, 
        JSON.stringify(pedido), 
        this.httpOptions)
        .pipe(
          retry(10),
          map((resposta: any) => { return resposta.id}),
          catchError(this.handleError)
      )
    //  .map((resposta: any) => resposta.id)
  }
   /* Exemplo
   public pesquisaOferta(termo: string): Observable<Oferta[]> {
    return this.http.get(URL_API + "?descricao_oferta_like=" + termo)
    .pipe(
        retry(10),
        map((response: any) => {
            return response
        })
        )
    }*/
 
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}