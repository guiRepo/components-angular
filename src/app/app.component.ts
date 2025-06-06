import { Component } from '@angular/core';
import { SelectComponent } from '../components/select/select.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SelectComponent, SwitchComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components-angular';
  checkedSelect: boolean = true;
  checkedSwitch: boolean = true;
  listItems = [
  { value: 'option1', label: 'Option One' },
  { value: 'option2', label: 'Option Two' },
  { value: 'option3', label: 'Option Three' },
];
}