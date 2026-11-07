import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuotationService } from '../../services/quotation';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotation',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './quotation.html',
  styleUrl: './quotation.css'
})
export class Quotation {


  brand = '';
  model = '';
  year = 2025;
  vehicleValue = 0;
  productId = 3;

  username = '';

  result: any = null;

  error = '';



  constructor(
    private quotationService: QuotationService,
    private cd: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.username =
      localStorage.getItem('username') ?? '';



    const productId =
      this.route.snapshot.paramMap.get('productId');


    if(productId){

      this.productId = Number(productId);

    }

  }

  createQuotation(){


    const data = {

      userId: Number(
        localStorage.getItem('userId')
      ),

      productId: this.productId,

      year: this.year,

      brand: this.brand,

      model: this.model,

      vehicleValue: this.vehicleValue


    };


    this.quotationService
      .createQuotation(data)
      .subscribe({

        next:(response)=>{

          this.result = response;

          // Limpiar formulario después de cotizar
          this.brand = '';
          this.model = '';
          this.year = 2025;
          this.vehicleValue = 0;
          this.productId = 3;


          // forzar actualización de pantalla
          this.cd.detectChanges();

        },

        error:(err)=>{

          console.error(err);

          this.error =
            'Error generando cotización';

        }

      });


  }
  logout(): void {
    console.log('Cerrando sesión');
    this.authService.logout();

    this.router.navigate(['/login']);

  }

}
