import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webuni-angular-hf2';
  activeTimezone:string = 'Europe/Budapest';

  activeTimezoneChanged(timezone:string){
    this.activeTimezone = timezone;
  }
}
