import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() tags: string[] = [];
  @Input() link = '';
  @Input() links: { label: string; url: string }[] = [];
  @Input() image = '';

  getIconFor(tag: string): string | null {
    const lower = tag.toLowerCase();
    const map: Record<string, string> = {
      'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      'vue 3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'pinia': 'https://raw.githubusercontent.com/vuejs/pinia/v2/logo.svg',
      'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'zustand': 'https://raw.githubusercontent.com/pmndrs/zustand/main/docs/public/favicon/android-chrome-192x192.png',
      'laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      'sqlite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      'firebase oauth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    };
    if (map[lower]) return map[lower];
    // try without special chars / spaces
    const simplified = lower.replace(/[^a-z0-9]/g, '');
    for (const key of Object.keys(map)) {
      if (key.replace(/[^a-z0-9]/g, '') === simplified) return map[key];
    }
    return null;
  }

  getPrimaryUrl(): string {
    if (this.link) return this.link;
    if (this.links && this.links.length > 0) return this.links[0].url;
    return '#';
  }
}




