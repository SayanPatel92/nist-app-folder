// settings.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  count: number = 1000; // Default count value

  @Output() countChanged = new EventEmitter<number>();

  updateCount() {
    console.log(this.count)
    this.countChanged.emit(this.count); // Emit the new count value
  }
}
