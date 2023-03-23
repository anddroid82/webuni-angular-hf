import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  
  @Input() timezone:string = '';
  @Input() isActive:boolean = false;
  timeString:string = '';
  @Output() activeTimezoneChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.setTimezoneString();
  }

  setTimezoneString(){
    this.timeString = new Date().toLocaleString("hu-HU", {timeZone: this.timezone});
  }

  setActiveTimezone(){
    this.isActive = true;
    this.activeTimezoneChange.emit(this.timezone);
  }

}
