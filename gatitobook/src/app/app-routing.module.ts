import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'animais',
    loadChildren: () => import ('./animais/animais.module').then((m) => m.AnimaisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
