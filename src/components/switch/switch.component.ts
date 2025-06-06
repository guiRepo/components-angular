import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'switch-component',
  imports: [FormsModule, MatIconModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  @Input() disabled: boolean = false;
  checked: boolean = true;

  public toggleSwitch(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggleSwitch();
    }
  }
}