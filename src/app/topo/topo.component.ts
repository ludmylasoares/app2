import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  
})
export class TopoComponent {

  public titulo: string = 'Ludmyla Soares'
  public subtitulo: string = 'Desenvolvedora Front-End'

  public isCollapsed = true;

}
