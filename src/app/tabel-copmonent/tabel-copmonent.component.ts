import { Component, ViewChild } from '@angular/core';
import { MainService } from '../main.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { tick } from '@angular/core/testing';
declare var $: any;

@Component({
  selector: 'app-tabel-copmonent',
  templateUrl: './tabel-copmonent.component.html',
  styleUrls: ['./tabel-copmonent.component.css']
})
export class TabelCopmonentComponent {
  constructor(private main: MainService) { }
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  displayedColumns = ['s.no', 'name', 'email', 'phone_no', 'address', 'action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async ngOnInit() {
    this.get_data()
    
  }
  
  Obj: any = {}
  async get_data() {
    let resp: any = await this.main.getItems();
    console.log(resp)
    this.dataSource = new MatTableDataSource(resp['data']);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  async delete(element: any) {
    let resp: any = await this.main.deleteItem(element.id);
    console.log(resp);
    if (resp['error'] == false) {
      Swal.fire('Success', resp['data'], 'success');
      this.get_data()
      return
    } else {
      Swal.fire('error', 'server side error', 'error');
      return
    }
  }
  close_model1() {
    $("#myModal1").modal("hide");
  }
  /////////////////////////opne model with prefilled data ////////////////////
  edit(element: any) {
    this.Obj = element;
  }
  // ////////////////////////////////////////update//////////////////////////////
  async update() {
    let resp = await this.main.update_data(this.Obj.id, this.Obj);
    console.log(resp);
    if (resp['error'] == false) {
      Swal.fire('success', resp['data'],'success');
      // $("#exampleModal").modal("hide");
      this.get_data()
      return
    } else {
      Swal.fire('error', 'server side error', 'error');
      return
    }
  }
}
