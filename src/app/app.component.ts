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
  }

  timezoneChanged(event:any) {
    this.timezones.forEach((v) => {
      if (v.id === event.id) v.timezone = event.timezone;
    });
  }

  get getMaxId(){
    const ids = this.timezones.map((v) => v.id);
    return Math.max(...ids);
  }

  addTimezoneComponent() {
    this.timezones.push({
      id:this.getMaxId+1,
      timezone: '',
      isActive: false
    });
  }
}
