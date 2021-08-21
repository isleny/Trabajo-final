import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { ImagenesService } from '../servicios/imagenes.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria []=[]
  index: number =0
  
  constructor(private imagenesServicio: ImagenesService) { }

  ngOnInit(): void {
    this.categorias = this.imagenesServicio.categorias
  }

  click(index:number){
    this.index= index
  }

}
