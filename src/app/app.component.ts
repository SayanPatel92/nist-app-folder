import { Component, OnInit } from '@angular/core';
import { XmlDataFetchService } from './xml-data-fetch.service';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number = 10;
  showSidebar: boolean = true;
  showSettings: boolean = false;
  xmlData: any;
  deviceStreams: any;
  selectedComponentStream: any;
  componentNameStream: any;

  constructor(private xmlService: XmlDataFetchService) {}

  ngOnInit(): void {
    // If you need to fetch data on component initialization
  }

  // Toggles the display of the settings component
  showSettingsComponent(): void {
    this.showSettings = true;
    this.showSidebar = false;
  }

  // Fetches sample data
  fetchSampleData(): void {
    const url = `https://smstestbed.nist.gov/vds/sample?count=${this.count}`;
    this.fetchXmlData(url);
  }

  // Fetches current data
  fetchCurrentData(): void {
    const url = 'https://smstestbed.nist.gov/vds/current';
    this.fetchXmlData(url);
  }

  // Updates the count for fetched data
  updateCount(newCount: number): void {
    this.count = newCount;
  }

  // Fetches XML data and initiates parsing
  fetchXmlData(xmlUrl: string): void {
    this.showSidebar = true;
    this.showSettings = false;
    this.xmlService.getXmlData(xmlUrl).subscribe(xml => {
      this.xmlData = xml;
      this.parseXml(xml);
    }, error => {
      console.error('Error fetching XML data:', error);
    });
  }

  // Parses the fetched XML data
  parseXml(xml: string): void {
    parseString(xml, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return;
      }
      console.log('Parsed XML:', result);
      this.deviceStreams = result?.MTConnectStreams?.Streams?.[0]?.DeviceStream || [];
    });
  }

  // Handles selection of a component stream
  onComponentStreamSelected(componentStream: any): void {
    const { $: componentNameStream, ...selectedComponentStream } = componentStream;
    this.componentNameStream = componentNameStream;
    this.selectedComponentStream = selectedComponentStream;
  }
}
