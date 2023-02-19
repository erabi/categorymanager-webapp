import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryTableComponent } from 'src/app/categories/category-table/category-table.component';
//import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';

const categoriesRoutes: Routes = [
  //{ path: 'category/:id', component: CategoryComponent },
  //{ path: 'category/new', component: CategoryComponent },
  { path: 'categories', component: CategoryTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
