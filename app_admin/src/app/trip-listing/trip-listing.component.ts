import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [
    CommonModule, 
    TripCardComponent, 
    RouterModule 
  ],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  // Inject our trip data service into the component
  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.getConnectedTrips();
  }

  // Call the service to fetch live database entries from the API
  private getConnectedTrips(): void {
    this.message = 'Fetching records from database...';
    
    this.tripDataService.getTrips().subscribe({
      next: (foundTrips: Trip[]) => {
        this.trips = foundTrips;
        if (this.trips.length === 0) {
          this.message = 'No trips found in the database backend.';
        } else {
          this.message = '';
        }
      },
      error: (err: any) => {
        this.message = 'Database offline or API network error.';
        console.error(err);
      }
    });
  }
}