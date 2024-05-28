import { Component } from '@angular/core';
import { MainService } from '../main.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-comopnent',
  templateUrl: './form-comopnent.component.html',
  styleUrls: ['./form-comopnent.component.css']
})
export class FormComopnentComponent {
  constructor(private main: MainService) { }
  formData: any = {}; // Object to store form data

  async onSubmit() {
    // Save form data into formData object with specific keys
    this.formData = {
      name: this.formData.name,
      email: this.formData.email,
      number: this.formData.number,
      address: this.formData.address
    };
    
    console.log('Form Data:', this.formData);
    let resp: any = await this.main.insert_data(this.formData);
    if (resp['error'] == false) {
      this.resetForm();
      Swal.fire('success', resp['data'], 'success');
      return
    } else {
      Swal.fire('Error', 'Error While Getting Data', 'error')
    }
  }

  // Reset form data
  resetForm() {
    this.formData = {};
  }
}
