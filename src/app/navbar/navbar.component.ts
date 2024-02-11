import { Component , EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() sampleDataClicked = new EventEmitter<void>();
  @Output() currentDataClicked = new EventEmitter<void>();
  @Output() settingsClicked = new EventEmitter<void>();

  onSampleDataClicked() {
    this.sampleDataClicked.emit();
  }

  onCurrentDataClicked() {
    this.currentDataClicked.emit();
  }

  onSettingsClicked() {
    this.settingsClicked.emit();
  }

}
