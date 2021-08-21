import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Output() onClick = new EventEmitter()
  @Input() color: String = "btn-primary"
  @Input() mensaje: String ="btn"
  @Input() tamano: String =""

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.onClick.emit()
  }

}
