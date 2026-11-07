import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: Product[] = [];

  loading = true;


  constructor(
    private productService: ProductService,
    private cd: ChangeDetectorRef
  ){}


  ngOnInit(): void {

    console.log('Products iniciado');

    this.productService.getProducts()
      .subscribe({

        next: (response) => {

          console.log('RESPUESTA RECIBIDA:', response);

          this.products = response.content;
          this.cd.detectChanges();

          this.loading = false;

        },

        error: (error) => {

          console.error('ERROR API:', error);

          this.loading = false;

        },

        complete: () => {

          console.log('Petición completada');

        }

      });

  }

}
