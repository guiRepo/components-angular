import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'select-component',
  imports: [MatIconModule, FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
emptyValue: string = '';
selectedLabel: string = '';
isOpen: boolean = false;
disabled: boolean = true;


listItems = [
  { value: 'option1', label: 'Option One' },
  { value: 'option2', label: 'Option Two' },
  { value: 'option3', label: 'Option Three' },
];

constructor (private elementRef: ElementRef) {}

toggleDropdown() {
  if(!this.disabled) 
    this.isOpen = !this.isOpen;
}

selectOption(item: { value: string; label: string }) {
  this.emptyValue = item.value;
  this.selectedLabel = item.label;
  this.isOpen = false;
}

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}