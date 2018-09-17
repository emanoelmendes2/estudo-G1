import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-listadenoticias',
  templateUrl: './listadenoticias.component.html',
  styleUrls: ['./listadenoticias.component.css']
})
export class ListadenoticiasComponent implements OnInit {
  lista = null;
  constructor(private noticias:NoticiasService) {}

  public ngOnInit(){
    this.lista= this.noticias.todas()}


  

}
