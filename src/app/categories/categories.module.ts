import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { CategoryTableComponent } from 'src/app/categories/category-table/category-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesRoutingModule } from 'src/app/categories/categories-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriesRoutingModule,
    MatTableModule,
  ],
  declarations: [
    CategoriesComponent,
    CategoryTableComponent,
  ],
  exports: []
})
export class CategoriesModule { }
