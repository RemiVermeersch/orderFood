import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MealOrderService } from './meal-order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  workWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor(private mealOrderService: MealOrderService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.mealOrderService.submitOrder(form.value).subscribe({
        next: (response) =>{
          console.log('Order submitted:', response);
        },
        error: (error) =>{
          console.error('Order submission failed:', error)
        }
      });
    }
  }
}
