import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
public myname = "Tirupathi"
public cOne=true;
public cTwo=true
public color = 'red'
  submitData(val){

console.log(this.myname);
  }

  toggle(){
this.cOne = !this.cOne;
this.cTwo = !this.cTwo;

  }
}
