import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-order-confirmation',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1 class="text-success">Thank You!</h1>
          <p class="lead text-info">Your order is placed! Your order ID is {{ orderId }}.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 100px;
    }

    h1 {
      font-size: 5rem;
      font-weight: bold;
    }

    p {
      font-size: 2rem;
      margin-top: 50px;
      margin-bottom: 50px;
    }

    .text-success {
      color: #28a745;
    }

    .text-info {
      color: #17a2b8;
    }
  `]
})
export class OrderConfirmationComponent implements OnInit {
  orderId: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.orderId = navigation?.extras?.state?.orderId;
  }

  ngOnInit(): void {
    if (!this.orderId) {
      this.router.navigate(['/']);
    }
  }
}
