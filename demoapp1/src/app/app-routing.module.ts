import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"rform",component:RegisterationComponent},
  {path:"rform",component:RegisterationComponent},
  {path:"menu",component:MenuComponent},
  {path:"",redirectTo:'pform',pathMatch:'full'},
  {path:"**",component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
