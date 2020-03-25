import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { Oferta } from './shared/oferta.model'

import { URL_API } from './app.api'

import { retry, catchError, map } from 'rxjs/operators'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

    //private url_api = 'http://localhost:3000/ofertas'
    
    constructor(private http: HttpClient){}
    
    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta[0])
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
            retry(7),
            map((response: any) => { return response }),
            catchError(this.handleError)
        )
    }
        // Manipulação de erros
        handleError(error: HttpErrorResponse) {
            let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // Erro ocorreu no lado do cliente
                    errorMessage = error.error.message;
                } else {
                    // Erro ocorreu no lado do servidor
                    errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
        }
            console.log(errorMessage)
                return throwError(errorMessage)
    }
}