import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submit(): void {
    alert(`Thanks, ${this.name}! I will get back to you soon.`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}





