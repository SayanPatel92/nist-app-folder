import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mainbox',
  templateUrl: './mainbox.component.html',
  styleUrls: ['./mainbox.component.css']
})
export class MainboxComponent {
  @Input() selectedComponentStream: any;
  @Input() componentNameStream: any;


  getObjectValues(): string[] {
    return Object.values(this.componentNameStream);
  }

  getObjectInfo(obj: any): { key: string, value: string }[] {
    console.log(obj)
    const info: { key: string, value: string }[] = [];
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          if (typeof value === 'object' && value !== null) {
            const nestedInfo = this.getObjectInfo(value);
            nestedInfo.forEach((item  , index )=> {
              info.push({ key: item.key, value: item.value });
            });
          } else {
            info.push({ key, value: value.toString() });
          }
        }
      }
    }

    return info;
  }
}
