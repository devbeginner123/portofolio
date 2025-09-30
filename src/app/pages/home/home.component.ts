import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrontendToolsComponent } from '../../components/frontend-tools/frontend-tools.component';
import { BackendToolsComponent } from '../../components/backend-tools/backend-tools.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FrontendToolsComponent, BackendToolsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  fullTitle = "Hi, I'm Allamsyah";
  typedTitle = '';
  private typingIndex = 0;

  ngOnInit(): void {
    this.typeNextChar();
  }

  private typeNextChar(): void {
    if (this.typingIndex <= this.fullTitle.length) {
      this.typedTitle = this.fullTitle.slice(0, this.typingIndex);
      this.typingIndex++;
      const baseDelay = 55;
      const variance = Math.random() * 50;
      setTimeout(() => this.typeNextChar(), baseDelay + variance);
    }
  }
}



