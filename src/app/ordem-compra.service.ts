import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { URL_API } from './app.api'

import { Pedido } from './shared/pedido.model'

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}

    public efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: HttpHeaders = new HttpHeaders()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            { headers: headers }
        )
        .map((resposta: Response) => resposta[0].id )
    }
}