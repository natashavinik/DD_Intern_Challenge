import { Component } from '@angular/core';
import { DroneDataComponent } from './components/drone-data/drone-data.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is present
  imports: [
    DroneDataComponent,
    HttpClientModule,
    // Include any other components or modules used in app.component.html
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dd-intern-challenge';
}
