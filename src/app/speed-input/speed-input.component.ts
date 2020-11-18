import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-speed-input',
  templateUrl: './speed-input.component.html',
  styleUrls: ['./speed-input.component.scss'],
})
export class SpeedInputComponent implements OnInit {
  public speedInputForm!: FormGroup;
  @Output() setSpeed: EventEmitter<number> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  get speedCtrl(): AbstractControl {
    return this.speedInputForm.get('speedValue') as AbstractControl;
  }

  public ngOnInit(): void {
    this.speedInputForm = this.formBuilder.group({
      speedValue: [, [Validators.min(0), Validators.max(10)]],
    });
  }

  public setSpeedValue(): void {
    const speedValue = Number(this.speedInputForm.get('speedValue')?.value);
    if (!this.speedInputForm.invalid) {
      this.setSpeed.emit(speedValue);
    }
  }
}
