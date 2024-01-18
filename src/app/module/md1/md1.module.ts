import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Md1Component } from './md1.component';
import { RouterModule } from '@angular/router';
import { Md1Router } from './md1.routing';



@NgModule({
  declarations: [
    Md1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Md1Router)
  ]
})
export class Md1Module { }
