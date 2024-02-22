import { Component , Input  , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() deviceStreams !: any[];
  @Output() componentStreamSelected = new EventEmitter<any>();

  selectComponentStream(componentStream: any) {
    this.componentStreamSelected.emit(componentStream);
    // console.log(componentStream)
  }
}
