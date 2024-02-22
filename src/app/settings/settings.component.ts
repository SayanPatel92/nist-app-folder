// settings.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  count: number = 1000; // Default count value
  baseUrl : string = 'https://smstestbed.nist.gov/vds/';
  urlOptions: string[] = [ // Array of URL options for the dropdown
    'https://smstestbed.nist.gov/vds/',
    'https://smstestbed.nist.gov/vds/current',
    'https://smstestbed.nist.gov/vds/sample',
  ];

  @Output() countChanged = new EventEmitter<number>();
  @Output() baseUrlChanged = new EventEmitter<string>();

  updateCount() {
    console.log(this.count)
    this.countChanged.emit(this.count); // Emit the new count value
  }


  updateBaseUrl(newUrl: string) {
    this.baseUrl = newUrl; // Update the base URL with the selected one
    console.log(this.baseUrl);
  }
}
