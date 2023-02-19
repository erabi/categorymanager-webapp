import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryTableComponent } from 'src/app/categories/category-table/category-table.component';

/* Il faudrait rajouter une vérification de l'authentification aux routes,
* à l'aide d'un service qui implémente l'interface CanActivate qui
* permettra de décider quelle route est activée quand l'utilisateur est authentifié.
*/

const categoriesRoutes: Routes = [
  { path: 'categories', component: CategoryTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(categoriesRoutes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
