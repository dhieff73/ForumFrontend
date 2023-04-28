import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  public visible: boolean = false;
  @Input() header: string = "";

}
