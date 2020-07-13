import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';
import { Subject } from 'rxjs/Subject'

import '../util/rxjs-extensions'

import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ OfertasService ]
})
export class MenuComponent implements OnInit {

  public estado: string = 'visivel'

  public ofertas: Observable<Oferta[]>
  
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .debounceTime(1000) //executa a ação do switchMap após 1 segundo
      .distinctUntilChanged() //para fazer pesquisas distintas
      .switchMap((termo: string) => {
        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        return Observable.of<Oferta[]>([])
      })
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
    console.log(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}