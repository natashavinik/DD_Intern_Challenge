import { Component, OnInit } from '@angular/core';
import { DroneDataService } from '../../services/drone-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

// Import Angular Material modules if you are using them in your template
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-drone-data',
  standalone: true,
  templateUrl: './drone-data.component.html',
  //   styleUrls: ['./drone-data.component.css'],
  imports: [
    // Add this array
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class DroneDataComponent implements OnInit {
  droneData: any[] = [];
  userQuery: string = '';
  aiResponse: string = '';
  displayedColumns: string[] = [];

  constructor(private droneDataService: DroneDataService) {}

  ngOnInit(): void {
    this.droneDataService.getDroneData().subscribe(
      (data) => {
        console.log('Drone data received:', data);
        this.droneData = data;
        if (data.length > 0) {
          this.displayedColumns = Object.keys(data[0]);
          console.log(this.displayedColumns);
        }
        // Clean up column names for display
      },
      (error) => {
        console.error('Error fetching drone data:', error);
      }
    );
  }

  submitQuery() {
    this.droneDataService
      .postUserQuery(this.userQuery)
      .subscribe((response) => {
        this.aiResponse = response.answer;
      });
  }
}
