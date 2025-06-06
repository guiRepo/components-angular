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
  isOpen: boolean = false;

constructor (private elementRef: ElementRef) {}

  public toggleDropdown(): void {
    if(!this.disabled) 
      this.isOpen = !this.isOpen;
  }

  public selectOption(item: { value: string; label: string }): void {
    this.emptyValue = item.value;
    this.selectedLabel = item.label;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  public handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}