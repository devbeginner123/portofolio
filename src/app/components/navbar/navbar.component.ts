import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(private theme: ThemeService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(event?: MouseEvent): void {
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? 0;
    const root = document.documentElement;
    // Trigger radial clip animation
    root.style.setProperty('--ink-x', `${x}px`);
    root.style.setProperty('--ink-y', `${y}px`);
    root.classList.add('theme-ink');
    this.theme.toggle();
    // Allow animation to run, then clean up
    setTimeout(() => root.classList.remove('theme-ink'), 600);
  }
}


