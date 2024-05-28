import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'http://localhost:3000/message';
  private apiUrl2 = 'http://localhost:3000/pdf/download'; 
  constructor(private http: HttpClient,private location: Location,private router:Router) { }
  ngOnInit(): void {
    this.reloadAtSpecificUrl();
  }
  form_flag: boolean = true;

  async getItems(): Promise<string> {
    try {
      const response: any = await this.http.get(this.apiUrl, { responseType: 'text' }).toPromise();
      return JSON.parse(response);
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }

  async insert_data(message: any): Promise<string> {
    try {
      const response: any = await this.http.post(this.apiUrl, message, { responseType: 'text' }).toPromise();
      return JSON.parse(response);
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
  async deleteItem(itemId: string): Promise<void> {
    try {
      let response: any = await this.http.delete(`${this.apiUrl}/${itemId}`).toPromise();
     console.log(response)
     return response
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  }
  async update_data(id: string, message: any): Promise<any> {
    try {
      const response: any = await this.http.put(`${this.apiUrl}/${id}`, message).toPromise();
      return response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }


  

  downloadPdf(): Observable<Blob> {
    return this.http.get(this.apiUrl2, { responseType: 'blob' });
  }
  
  viewPdf(): Observable<Blob> {
    return this.http.get(this.apiUrl2, { responseType: 'blob' });
  }


  reloadAtSpecificUrl(): void {
    this.router.navigate(['/index']);
  }


}
