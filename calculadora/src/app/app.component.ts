import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'calculadora';
  titulo = "Calculadora";
  
  
  numero1: number;
  numero2: number;
  resultado: number;
  constructor() { 
    this.numero1 = 0
    this.numero2 =0
    this.resultado=0
  }

  ngOnInit() {
  }

  sumar(){
    this.resultado = this.numero1+this.numero2
  }

  restar(){
    this.resultado=this.numero1-this.numero2
  }

  multiplicar(){
    this.resultado=this.numero1*this.numero2
  }

  dividir(){
    this.resultado=this.numero1/this.numero2
  }
 
}
