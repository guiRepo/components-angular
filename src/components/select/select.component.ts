import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
interface ItemsList {
  value: string,
  label: string
}
@Component({
  selector: 'select-component',
  imports: [MatIconModule, FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() disabled: boolean = false;
  @Input() items!: Array<ItemsList>;
  emptyValue: string = '';
  selectedLabel: string = '';
  selectedValue: string | null = null;
  isOpen = false;
  focusedIndex = 0;

constructor (private elementRef: ElementRef) {}

  toggleDropdown() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.focusedIndex = this.items.findIndex(item => item.value === this.selectedValue) || 0;
    }
  }

  selectOption(item: { value: string; label: string }) {
    this.selectedValue = item.value;
    this.selectedLabel = item.label;
    this.isOpen = false;
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!this.isOpen) {
        this.toggleDropdown();
      } else {
        const item = this.items[this.focusedIndex];
        if (item) this.selectOption(item);
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!this.isOpen) {
        this.toggleDropdown();
      } else {
        this.focusedIndex = (this.focusedIndex + 1) % this.items.length;
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!this.isOpen) {
        this.toggleDropdown();
      } else {
        this.focusedIndex = (this.focusedIndex - 1 + this.items.length) % this.items.length;
      }
    } else if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  public handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}