import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'checkbox-disabled-component',
  imports: [FormsModule, MatIconModule],
  templateUrl: './checkbox-disabled.component.html',
  styleUrl: './checkbox-disabled.component.css'
})
export class CheckBoxDisabledComponent {
  @Input() label!: string;
  @Output() checked = new EventEmitter<{ label: string; value: boolean }>();
  checkValue: boolean = false;

  public onCheckboxChange(): void {
    this.checked.emit({ label: this.label, value: this.checkValue });
  }
}