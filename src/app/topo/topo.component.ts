import { Component } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  
})
export class TopoComponent {

  public titulo: string = 'Ludmyla Soares'

  public isCollapsed = true;

  faAngleDown = faAngleDown;
}
