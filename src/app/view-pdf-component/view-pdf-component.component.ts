import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../main.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-view-pdf-component',
  templateUrl: './view-pdf-component.component.html',
  styleUrls: ['./view-pdf-component.component.css']
})
export class ViewPdfComponentComponent {
  constructor(private main: MainService,private router :Router){}
   ngOnInit(): void {
    this.downloadAndOpenPdf();
  }
 

  downloadAndOpenPdf(): void {
    this.main.viewPdf().subscribe(blob => {
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
    }); 
  }
}
