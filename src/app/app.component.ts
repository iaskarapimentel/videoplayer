import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: ('app.component.html')
})
export class AppComponent {

  currentUrl: string = "";

  receiveUrl($event: string) {
    this.currentUrl = $event;
  }
}
