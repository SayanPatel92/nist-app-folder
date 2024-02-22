import { Component, OnInit } from '@angular/core';

import { XmlDataFetchService } from './xml-data-fetch.service';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  count = 1;
  flag = 1;
  showSidebar: boolean = true;
  showSettings: boolean = false;
  url: String = `https://smstestbed.nist.gov/vds/`;

  xmlData : any;
  constructor(private xmlService: XmlDataFetchService ) {}

  deviceStreams: any;
  
  showSettingsComponent() {
    this.showSettings = true;
    this.showSidebar = false; // Hide sidebar when settings is clicked
  }
  

  fetchSampleData(): void {
    if(this.flag === 1){
      this.url = this.url + `sample`;
    }
    else
    {
      this.url = this.url + `sample?count=${this.count}`;
    }
    this.fetchXmlData(this.url);
  }

  fetchCurrentData(): void {
    const url = this.url + `current`;
    this.fetchXmlData(url);
  }

  updateCount(newCount: number): void {
    this.count = newCount;
    this.flag = 0;
  }

  updateBaseUrl(newUrl:string):void{
    console.log(newUrl);
    this.url  = newUrl;
  }

  fetchXmlData(xmlUrl:any):void {
    this.showSidebar = true;
    this.showSettings = false;
    this.xmlService.getXmlData(xmlUrl).subscribe(xml => {
      this.xmlData = xml;
      this.parseXml(xml);
    });
  }
    
  parseXml(xml: string): void {
    parseString(xml, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
      } else {
        console.log('Parsed XML:', result);
        // Access Streams array from the parsed XML
        const streams = result.MTConnectStreams.Streams;
        if (streams && Array.isArray(streams)) {
          streams.forEach(stream => {
            if (stream.DeviceStream) {
              // If DeviceStream exists, push it to deviceStreams array
              this.deviceStreams = stream.DeviceStream;
            }
          });
        }
      }
    });
  }
  selectedComponentStream: any;
  componentNameStream : any;

  onComponentStreamSelected(componentStream: any) {

  // Extract properties under componentStream.$
  const componentStream$ = componentStream.$;

  // Extract rest of the properties
  const { $, ...rest } = componentStream;

    this.componentNameStream = componentStream$;
    this.selectedComponentStream = rest;
  }

}
