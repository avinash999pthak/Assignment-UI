import { Component } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-genrate-pdf-component',
  templateUrl: './genrate-pdf-component.component.html',
  styleUrls: ['./genrate-pdf-component.component.css']
})
export class GenratePdfComponentComponent {
constructor(private main :MainService){}
async ngOnInit() {
  this.downloadPdf();
}
downloadPdf() {
  console.log("i am in")
  this.main.downloadPdf().subscribe(
    response => {
      const url = window.URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'user.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    },
    error => {
      console.error('Error downloading PDF:', error);
    }
  );
}
}
