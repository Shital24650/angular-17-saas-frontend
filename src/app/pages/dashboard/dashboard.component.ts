import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard';

  constructor() { }

  ngOnInit() {
    // Call dashboard initialization logic
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Logic to load dashboard data
    console.log('Loading dashboard data...');
    // Example: Fetch data from a service
  }
}