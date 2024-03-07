/* import { AgmCoreModule } from 'angular2-google-maps/core'; */
/* import { Ng2PageScrollModule } from 'ng2-page-scroll'; */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MudremisliComponent } from './pages/mudremisli/mudremisli.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsModule, productsRoutes } from './pages/products/products.module';
import { ReferencesComponent } from './pages/references/references.component';

const appRoutes: Routes = [
  { path: 'kontakt', component: ContactComponent },
  { path: 'proizvodi', component: ProductsComponent, children: productsRoutes },
  { path: 'reference', component: ReferencesComponent },
  { path: 'motivacione-mudrosti', component: MudremisliComponent },
  { path: '', redirectTo: '/proizvodi/proizvodni-program', pathMatch: 'full' },
  { path: '**', redirectTo: '/proizvodi/proizvodni-program' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ReferencesComponent,
    ProductsComponent,
    MudremisliComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /* AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNO5kdusRR1oxgM6Kwe3XVuUpYJSz6pzg' }), */
    RouterModule.forRoot(appRoutes, { useHash: true }),
    /* Ng2PageScrollModule.forRoot(), */
    ProductsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
