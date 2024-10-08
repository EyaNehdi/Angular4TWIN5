import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from 'src/app/components/apropos/apropos.component';

const routes: Routes = [
  {path:"apropos/:id", component:AproposComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AproposRoutingModule { }
