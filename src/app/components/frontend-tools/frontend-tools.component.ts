import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-frontend-tools',
  standalone: true,
  imports: [NgFor],
  templateUrl: './frontend-tools.component.html',
  styleUrl: './frontend-tools.component.css'
})
export class FrontendToolsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLDivElement>;

  logos: string[] = [
    'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg',
    'https://www.vectorlogo.zone/logos/angular/angular-icon.svg',
    'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
    'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
    'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    'https://ui.shadcn.com/favicon.ico',
    'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg',
  ];

  private gapPx = 40; // matches gap-10
  private offsetPx = 0;
  private speedPxPerSec = 60; // smooth speed; adjust as desired
  private rafId = 0;
  private lastTs = 0;

  ngAfterViewInit(): void {
    const step = this.getStep();
    if (step === 0) return;
    const loop = (ts: number) => {
      if (!this.lastTs) this.lastTs = ts;
      const dt = (ts - this.lastTs) / 1000;
      this.lastTs = ts;
      this.offsetPx += this.speedPxPerSec * dt;

      // Rotate seamlessly when crossing one item width
      let stepSize = this.getStep();
      while (stepSize > 0 && this.offsetPx >= stepSize) {
        this.offsetPx -= stepSize;
        const first = this.logos.shift();
        if (first) this.logos.push(first);
        stepSize = this.getStep();
      }

      this.applyTransform();
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  ngDestroy?: () => void;
  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private getStep(): number {
    const firstItem = this.trackRef?.nativeElement.querySelector('.logo-item') as HTMLElement | null;
    if (!firstItem) return 0;
    return firstItem.offsetWidth + this.gapPx;
  }

  private applyTransform(): void {
    if (!this.trackRef) return;
    this.trackRef.nativeElement.style.transform = `translateX(-${this.offsetPx}px)`;
  }
}


