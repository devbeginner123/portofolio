import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  isLoading = true;

  constructor() {
    // Simulate first-load animation; hide quickly on subsequent navigations
    // Use a minimal timeout to ensure the overlay is visible but snappy
    setTimeout(() => {
      this.isLoading = false;
      // Add global class to enable fade-ins outside Angular view container
      document.body.classList.add('animate-ready');
    }, 900);
  }
}
