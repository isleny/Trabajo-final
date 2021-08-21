import { Injectable } from '@angular/core';
import { Categoria } from '../categoria';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  public categorias:Categoria[] = []
  public datosUsuario=[{"usuario":"usuario","contra":"456"}]
   public login = true;

  constructor() {
    this.categorias = [
      {
        nombre:"Animales silvestres",
        imagenes:  ["https://conexioncapital.co/wp-content/uploads/2020/05/Bioparque.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GdKciHFSErVOHTP20CI22oF1UBwq4-oQWfK_cqvLwb9tq60xURd6I4G3iEfeoahrxuY&usqp=CAU","https://files.rcnradio.com/public/2020-10/koalas_australianos_2_1_0.jpg"]
      },
      {
        nombre:"Paisajes",
        imagenes:["https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOnutsVHGxpozdQPxKJkmqUupY7pHELFMDg&usqp=CAU","https://media.istockphoto.com/photos/autumn-nature-scenery-picture-id1191104333"]
      }
   
    ] 
   }
   
   inicio(){
     this.login=false 
   }

}