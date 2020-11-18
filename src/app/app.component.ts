import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private speedValue = 0.5;
  constructor(private renderer: Renderer2) {}
  @ViewChild('movingbox', { read: ElementRef }) movingbox!: ElementRef;
  @ViewChild('wrapper', { read: ElementRef }) wrapper!: ElementRef;

  public setSpeedValue(speedValue: number): void {
    this.speedValue = speedValue;
  }

  public onClick(event: MouseEvent): void {
    const horizontalPos =
      event.clientX - this.wrapper.nativeElement.getBoundingClientRect().left;
    const verticalPos =
      event.clientY - this.wrapper.nativeElement.getBoundingClientRect().top;
    const movingBox = this.movingbox.nativeElement.lastChild;

    this.renderer.setStyle(movingBox, 'left', `${horizontalPos}px`);
    this.renderer.setStyle(movingBox, 'top', `${verticalPos}px`);
    this.renderer.setStyle(
      movingBox,
      'transition',
      `left ${this.speedValue}s , top ${this.speedValue}s `
    );
  }
}
