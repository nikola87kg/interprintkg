import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { VizitkeComponent } from './/vizitke/vizitke.component';
import { KalendariComponent } from './kalendari/kalendari.component';
import { KnjigeComponent } from './knjige/knjige.component';
import { BlokovskarobaComponent } from './blokovskaroba/blokovskaroba.component';
import { FlajeriComponent } from './flajeri/flajeri.component';
import { ReklamniblokoviComponent } from './reklamniblokovi/reklamniblokovi.component';
import { OlovkeComponent } from './olovke/olovke.component';
import { UpaljaciComponent } from './upaljaci/upaljaci.component';
import { FascikleComponent } from './fascikle/fascikle.component';
import { KeseComponent } from './kese/kese.component';
import { RokovniciComponent } from './rokovnici/rokovnici.component';
import { NalepniceComponent } from './nalepnice/nalepnice.component';
import { WebComponent } from './web/web.component';
import { SveComponent } from './sve/sve.component';

export const productsRoutes: Routes = [
  { path: 'blokovska-roba', component: BlokovskarobaComponent },
  { path: 'fascikle', component: FascikleComponent },
  { path: 'flajeri', component: FlajeriComponent },
  { path: 'kalendari', component: KalendariComponent },
  { path: 'rokovnici', component: RokovniciComponent },
  { path: 'nalepnice', component: NalepniceComponent },
  { path: 'kese', component: KeseComponent },
  { path: 'knjige', component: KnjigeComponent },
  { path: 'olovke', component: OlovkeComponent },
  { path: 'upaljaci', component: UpaljaciComponent },
  { path: 'reklamni-blokovi', component: ReklamniblokoviComponent },
  { path: 'vizit-karte', component: VizitkeComponent },
  { path: 'izrada-sajtova', component: WebComponent },
  { path: 'proizvodni-program', component: SveComponent },
];

@NgModule({
  declarations: [
    VizitkeComponent,
    KalendariComponent,
    KnjigeComponent,
    BlokovskarobaComponent,
    FlajeriComponent,
    ReklamniblokoviComponent,
    OlovkeComponent,
    UpaljaciComponent,
    FascikleComponent,
    KeseComponent,
    RokovniciComponent,
    NalepniceComponent,
    WebComponent,
    SveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ]
})
export class ProductsModule { }
