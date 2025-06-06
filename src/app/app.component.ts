import { Component } from '@angular/core';
import { SelectComponent } from '../components/select/select.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { CheckBoxDisabledComponent } from '../components/check-disabled/checkbox-disabled.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [SelectComponent, SwitchComponent, CheckBoxDisabledComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components-angular';
  statusCheckedSelect: boolean = false;
  statusCheckedSwitch: boolean = false;
  listItems = [
  { value: 'option1', label: 'Option One' },
  { value: 'option2', label: 'Option Two' },
  { value: 'option3', label: 'Option Three' },
  ];

  public updateValue(event: { label: string; value: boolean }): void {
    if (event.label === 'Desabilitar select') {
      this.statusCheckedSelect = event.value;
    } else if (event.label === 'Desabilitar switch') {
      this.statusCheckedSwitch = event.value;
    }
  }
}