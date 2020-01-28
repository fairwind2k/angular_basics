import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs';
// import {} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;

  constructor() {
    const intervalStreams$ = interval(1000);
    this.sub = intervalStreams$.subscribe((value) => {
      console.log(value);
    });
  }

  stop() {
    this.sub.unsubscribe();
  }

}
