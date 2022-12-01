import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comentario } from 'src/app/types/comentario.type';


@Component({
  selector: 'app-input-comentario',
  templateUrl: './input-comentario.component.html',
  styleUrls: ['./input-comentario.component.css']
})
export class InputComentarioComponent implements OnInit {
  autor: string = "miguel";
  conteudo: string = "vou deixar a vane comemorar com o travesseiro";


  @Output() retornaComentario: EventEmitter<Comentario> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  enviarComentario(){
    console.log("botão ativo");
    console.log(this.autor+" disse "+this.conteudo);
    const comentario: Comentario = {
      nome: this.autor,
      conteudo: this.conteudo
    }
    this.retornaComentario.emit(comentario);
  }
}
