import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from 'src/app/add-item/add-item.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LendItemComponent } from '../app/lend-item/lend-item.component';
import { ViewAllComponent } from '../app/view-all/view-all.component';
import { ReportComponent} from '../app/report/report.component';
import { from } from 'rxjs';

const  routes : Routes = [
  { path : '', component: HomeComponent },
  { path : 'home' , component: HomeComponent },
  { path: 'add-item', component: AddItemComponent},
  { path: 'lend-item', component: LendItemComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'report', component: ReportComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
