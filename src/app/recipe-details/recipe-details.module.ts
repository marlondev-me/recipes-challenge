import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesDetailsPageRoutingModule } from './recipe-details-routing.module';

import { RecipesDetailsPage } from './recipe-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesDetailsPageRoutingModule
  ],
  declarations: [RecipesDetailsPage]
})
export class RecipesDetailsPageModule {}
