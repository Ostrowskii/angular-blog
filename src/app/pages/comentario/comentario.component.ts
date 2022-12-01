import { Component, OnInit, Output } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { Comentario } from 'src/app/types/comentario.type';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentarios: Array<Comentario> = this.comentarioService.comentarios;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
  }

  recebeComentario(comentario:Comentario){
    console.log("recebe Comentario isso é um metodo");
    console.log(comentario);
    this.comentarioService.addComentario(comentario);
  }
}
