import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webuni-angular-hf2';
  timezones:{id:number, timezone:string,isActive:boolean}[] = [
    {id:1,timezone:'Europe/Budapest',isActive: false},
    {id:2,timezone:'Europe/London',isActive: false},
  ];

  activeTimezoneChanged(timezone:string){
    this.timezones.forEach((v) => {
      v.isActive = timezone === v.timezone;
    });
    console.log(this.timezones);
  }

  timezoneChanged(event:any) {
    let item = this.timezones.find(v => v.id === event.id);
    console.log(event);
  }

  addTimezoneComponent() {
    this.timezones.push({
      id:this.timezones.length,
      timezone: '',
      isActive: false
    });
  }
}
