import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Game Info Explorer + AI Recommendations',
      description: 'AI wrapper with Firebase OAuth and REST integrations.',
      tags: ['React', 'Firebase', 'Tailwind'],
      link: '',
      image: 'https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2024/01/04203406/ai-in-gaming-01-1.png',
      links: []
    },
    {
      title: 'E-Procurement (Blockchain Simulation)',
      description: 'Tender-like app recording transactions on a blockchain simulation.',
      tags: ['Vue 3', 'Pinia', 'Tailwind', 'TypeScript', 'Express', 'MongoDB'],
      link: 'https://blockchain-simulation-one.vercel.app/',
      image: '/blockchain-1.png',
      links: [
        { label: 'Frontend Repo', url: 'https://github.com/allmsyh685/blockchain-simulation-frontend' },
        { label: 'Backend Repo', url: 'https://github.com/allmsyh685/blockchain-simulation-api' }
      ]
    },
    {
      title: 'Survey Gamification',
      description: 'Gamified questionnaire to keep users engaged while filling surveys.',
      tags: ['Next.js', 'Tailwind', 'Zustand', 'Laravel', 'MySQL'],
      link: 'https://game-kuisioner.vercel.app/',
      image: '/survei-1.png',
      links: [
        { label: 'Frontend Repo', url: 'https://github.com/allmsyh685/game-kuisioner' },
        { label: 'Backend Repo', url: 'https://github.com/allmsyh685/kuisioner-api' }
      ]
    },
    {
      title: 'Portfolio (This Site)',
      description: 'Angular-based personal portfolio showcasing selected works.',
      tags: ['Angular', 'Tailwind'],
      link: '',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
      links: []
    },
    {
      title: 'VeggieVision (Android)',
      description: 'Scan vegetables/fruits to estimate freshness via mobile app.',
      tags: ['Kotlin', 'SQLite', 'Firebase OAuth', 'Firebase'],
      link: 'https://github.com/Khosyi0/VeggieVision/tree/main/3.Mobile%20Development',
      image: '/veggievision.jpg',
      links: [
        { label: 'GitHub', url: 'https://github.com/Khosyi0/VeggieVision/tree/main/3.Mobile%20Development' }
      ]
    }
  ];
}




