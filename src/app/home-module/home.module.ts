import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent} from './home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule { }
