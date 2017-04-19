import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  now = new Date();

  constructor(private cd : ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit() {
    this.cd.detach();
    
    this.ngZone.runOutsideAngular( () =>
      setInterval(() => {
        this.now = new Date();
        this.cd.detectChanges();
    }
      , 1000)
    );
  }

}
