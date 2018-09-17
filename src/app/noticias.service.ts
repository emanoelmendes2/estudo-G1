import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor() { 

    class NoticiasService{
      lista = [{id:1, titulo:"emanoel",autor:"mat"},{id:2, titulo:"magalhaes",autor:"port"}];

      public todas(){
        return this.lista;
      }
    }
  }
}
