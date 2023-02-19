import { Component, Inject, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})

export class CategoryTableComponent implements OnInit {

  public categories: Category[];
  public displayedColumn: string[] = ['name'];

  constructor(
    @Inject(ActivatedRoute) public route: ActivatedRoute,
    @Inject(CategoryService) public categoryService: CategoryService
  ) {
    this.categories = [];
  }


  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const selectedPage = params.get('page');
      this.categoryService.getAll(selectedPage ? +selectedPage : 0).subscribe(data => this.categories = data.content);
    });


  }

}
