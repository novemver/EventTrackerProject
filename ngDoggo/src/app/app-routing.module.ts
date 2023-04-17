import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: DogsListComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
