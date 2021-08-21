import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from './boton/boton.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { ImagenesService } from './servicios/imagenes.service';
import { ServiciosComponent } from './servicios/servicios.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    CrearPersonaComponent,
    ImagenComponent,
    ListaCategoriaComponent,
    ListaPersonasComponent,
    ServiciosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
