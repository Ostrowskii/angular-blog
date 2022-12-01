import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './pages/comentario/comentario.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'comentario',
    component:ComentarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
