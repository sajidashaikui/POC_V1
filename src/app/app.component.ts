import { Component } from '@angular/core';
const ELEMENT_DATA = [
  { imageUrl: 'assets/download.jpg', band: 1, name: 'Matt', lastonline: '8 mins ago', country: 'US', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 2, name: 'Lisa', lastonline: '8 mins ago', country: 'UK', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 3, name: 'Emma', lastonline: '18 mins ago', country: 'US', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 4, name: 'Thomas', lastonline:'38 mins ago', country: 'US', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 5, name: 'Jill', lastonline: '30 mins ago', country: 'US' , battery:'19%'},
  { imageUrl: 'assets/download.jpg', band: 6, name: 'Zach', lastonline: '30 mins ago', country: 'US' , battery:'19%'},
  { imageUrl: 'assets/download.jpg', band: 7, name: 'Ron', lastonline: '40 mins ago', country: 'US', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 8, name: 'Chris', lastonline: '50 mins ago', country: 'US', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 9, name: 'Gordon', lastonline: '20 mins ago', country: 'US', battery:'19%' },
  { imageUrl: 'assets/download.jpg', band: 10, name: 'Markus', lastonline: '55 mins ago', country: 'NUS' , battery:'19%'},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'band', 'battery', 'lastonline', 'country'];
  dataSource = ELEMENT_DATA;
  title = 'Offenders';
  longText = "Running";

  servers = [{
    name: "Server 1",
    status: "Active",
    state: "Running..",
    desc : "Applications"
  },
  {
    name: "Server 2",
    status: "Active",
    state: "Inactive.",
    desc : "Applications"
  },
  {
    name: "Server 3",
    status: "Deactive",
    state: "Inactive.",
    desc : "Applications"
  }
];

}

