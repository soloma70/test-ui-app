import { Component } from '@angular/core';
import { MyMonitoringService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyMonitoringService]
})
export class AppComponent {
  title = 'test-application';
  constructor(private myMonitoringService: MyMonitoringService) {
       
  }
}

