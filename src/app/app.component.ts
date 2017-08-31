import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir works!';

  private switch = true;
  onSwitch(){

    this.switch = !this.switch;
  }
private items=[0,2,1,2,3];
}
