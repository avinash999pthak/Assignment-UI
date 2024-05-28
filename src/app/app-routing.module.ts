import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComopnentComponent } from './form-comopnent/form-comopnent.component';
import { TabelCopmonentComponent } from './tabel-copmonent/tabel-copmonent.component';
import { GenratePdfComponentComponent } from './genrate-pdf-component/genrate-pdf-component.component';
import { ViewPdfComponentComponent } from './view-pdf-component/view-pdf-component.component';
import { AppComponent } from './app.component';
import { IntegrationComponentComponent } from './integration-component/integration-component.component';

const routes: Routes = [
  {
    path:"index",
    component:AppComponent
  },
 
  {
    path: "form",
    component: FormComopnentComponent
  },
  {
    path: "tabel",
    component: TabelCopmonentComponent
  },
  {
    path: "pdf",
    component: GenratePdfComponentComponent
  },
  {
    path: "view_pdf",
    component: ViewPdfComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
