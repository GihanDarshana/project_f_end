import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  state = true;

  stateChanger(){

    this.state = !this.state;
  }
  name = "";
  showMyValue(event){
    this.name = event.target.value;
  }
}
