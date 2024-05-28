import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComopnentComponent } from './form-comopnent/form-comopnent.component';
import { TabelCopmonentComponent } from './tabel-copmonent/tabel-copmonent.component';
import { IntegrationComponentComponent } from './integration-component/integration-component.component';
import { GenratePdfComponentComponent } from './genrate-pdf-component/genrate-pdf-component.component';
import { DownloadPdfComponentComponent } from './download-pdf-component/download-pdf-component.component';
import { ViewPdfComponentComponent } from './view-pdf-component/view-pdf-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    AppComponent,
    FormComopnentComponent,
    TabelCopmonentComponent,
    IntegrationComponentComponent,
    GenratePdfComponentComponent,
    DownloadPdfComponentComponent,
    ViewPdfComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
