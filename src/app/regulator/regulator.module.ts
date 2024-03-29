import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegulatorPage } from './regulator.page';

const routes: Routes = [
  {
    path: 'regulator',
    component: RegulatorPage,
    children: [
      { path: 'main', loadChildren: '../regulator/main/main.module#MainPageModule' },
    ]
  },
  {
    path : '',
    redirectTo:'/regulator/main',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegulatorPage]
})
export class RegulatorPageModule {}
