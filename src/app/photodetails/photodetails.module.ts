import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotodetailsPageRoutingModule } from './photodetails-routing.module';

import { PhotodetailsPage } from './photodetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotodetailsPageRoutingModule
  ],
  declarations: [PhotodetailsPage]
})
export class PhotodetailsPageModule {}
