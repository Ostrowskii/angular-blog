import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from 'src/app/types/comentario.type';

@Component({
  selector: 'app-lista-comentario',
  templateUrl: './lista-comentario.component.html',
  styleUrls: ['./lista-comentario.component.css']
})
export class ListaComentarioComponent implements OnInit {

@Input() comentarios: Array<Comentario> = [];


  constructor() { }

  ngOnInit(): void {
  }

}
