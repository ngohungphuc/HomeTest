import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-speed-input',
  templateUrl: './speed-input.component.html',
  styleUrls: ['./speed-input.component.scss'],
})
export class SpeedInputComponent {
  @Output() setSpeed: EventEmitter<number> = new EventEmitter();

  public setSpeedValue(event: KeyboardEvent): void {
    const speedValue = Number((event.target as HTMLInputElement).value);
    if (!isNaN(speedValue) && Number(speedValue) > 0) {
      this.setSpeed.emit(speedValue);
    }
  }
}
