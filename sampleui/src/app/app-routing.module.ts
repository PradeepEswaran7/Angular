import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [

  {path:'promotion', component:PromotionComponent},
   
  {path:'', redirectTo:"promotion", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
