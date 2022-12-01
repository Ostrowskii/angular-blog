import { Injectable } from '@angular/core';
import { Comentario } from '../types/comentario.type';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  comentarios: Array<Comentario> = [];

  constructor() { }

  addComentario(comentario:Comentario){
    this.comentarios.push(comentario);
  }

}
