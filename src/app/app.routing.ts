import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const AppRouter:Routes = [
  //adição dos modulos
  /*{
    path:"",
    redirectTo:'',
    pathMatch:"full"
  }*/  //redicionamente padrao
  {path:"",component:HomeComponent},
  {
    path:"md1",
    loadChildren:()=>import('./module/md1/md1.module').then(m => m.Md1Module)
  },
  {
    path:"md2",
    loadChildren:()=>import('./module/md2/md2.module').then(m => m.Md2Module)
  }
];
