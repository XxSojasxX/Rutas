import { Component } from '@angular/core';
// para trabajar con los microservicios
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // inyeccionde dependecias = algo similar a instanciar un objeto
  constructor(private httpClient: HttpClient){

  }
  ngOnInit():void{
    this.getProducts();
  }
    getProducts(){
      // objeto . metodo =this.httpClient.get
    const response =  this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend
    console.log(response);
    };

  }

