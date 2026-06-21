import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Added Forms
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [ReactiveFormsModule], // Add this to imports
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  editForm!: FormGroup; // Define the form group
  tripCode: string = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder, // Inject FormBuilder
    private tripService: TripDataService
  ) { }

  ngOnInit(): void {
    this.tripCode = localStorage.getItem('tripCode') || "";
    
    if (!this.tripCode) {
      this.router.navigate(['']);
      return;
    }

    // Initialize the form structure
    this.editForm = this.formBuilder.group({
      code: [this.tripCode], // Keeps code hidden/read-only
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required]
    });

    // Fetch all trips and filter for the one we need
    this.tripService.getTrips().subscribe((data: any) => {
      const trip = data.find((t: any) => t.code === this.tripCode);
      if (trip) {
        this.editForm.patchValue(trip); // This fills the form with the data
      }
    });
  }
  onSubmit(): void {
    if (this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value).subscribe({
        next: (data: any) => {
          console.log("Update Successful:", data);
          alert("Trip updated successfully!");
          this.router.navigate(['/list-trips']); // Adjust this path if your route is named differently
        },
        error: (err: any) => {
          console.error("Error updating trip:", err);
          alert("Error updating trip. Check console for details.");
        }
      });
    }
  }
}    