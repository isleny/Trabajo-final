import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imagenes: string[] = []
  private index = 0
  public url = ""

  constructor() { }

  ngOnInit(): void {
  }

  anterior(){
    if(this.index == 0){
      this.index = this.imagenes.length
    }
    this.index--
    this.url = this.imagenes[this.index]
  }
  siguiente(){
    if(this.index == this.imagenes.length-1){
      this.index = -1
    }
    this.index++
    this.url = this.imagenes[this.index]
  }

}
