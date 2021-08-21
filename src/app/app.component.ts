import { Component } from '@angular/core';
import { ImagenesService } from './servicios/imagenes.service';
//import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabajo-final';

  constructor(public servicioImagen: ImagenesService){
   // setTheme('bs3');
  }
}
