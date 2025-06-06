import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'checkbox-disabled-component',
  imports: [FormsModule, MatIconModule],
  templateUrl: './checkbox-disabled.component.html',
  styleUrl: './checkbox-disabled.component.css'
})
export class CheckBoxDisabledComponent {
  @Input() disabled: boolean = false;
  checked: boolean = true;
}