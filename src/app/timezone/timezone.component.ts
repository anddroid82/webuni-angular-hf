import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  @Input() id: number = 0;
  @Input() timezone: string = '';
  @Input() isActive: boolean = false;
  timeString: string = '';
  timeObj: Date = new Date();
  timeError: string = '';
  @Output() activeTimezoneChange = new EventEmitter<string>();
  @Output() timezoneChange = new EventEmitter<{ id: number, timezone: string }>();

  ngOnInit(): void {
    this.setTimezoneString();
  }

  setTimezone() {
    this.timezoneChange.emit({ id: this.id, timezone: this.timezone });
  }

  setTimezoneString() {
    this.timeError = '';
    try {
      this.timeString = new Date().toLocaleString("en", { timeZone: this.timezone });
      this.timeObj = new Date(this.timeString);
      this.setTimezone();
    } catch (ex) {
      this.timeError = 'Hibás formátum!';
    }
  }

  setActiveTimezone() {
    this.isActive = true;
    this.activeTimezoneChange.emit(this.timezone);
  }

}
