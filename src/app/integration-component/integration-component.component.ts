import { Component, HostListener } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-integration-component',
  templateUrl: './integration-component.component.html',
  styleUrls: ['./integration-component.component.css']
})
export class IntegrationComponentComponent {
  constructor(private main:MainService,private router:Router){}

  // //////add user //////////
  add(){
    console.log("i am in")
    this.router.navigate(['/form'])
  }
  view(){
    console.log("i am in")
    this.router.navigate(['/tabel'])
  }
  isMobileScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }
  downaload(){
    this.router.navigate(['/pdf']);
  }
  view_pdf(){
    this.router.navigate(['/view_pdf']);
  }

  


  private checkScreenSize() {
    this.isMobileScreen = window.innerWidth <= 768; // Change the value to your desired breakpoint
  }
}
