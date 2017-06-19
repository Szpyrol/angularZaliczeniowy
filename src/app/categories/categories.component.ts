import { Component, OnInit } from '@angular/core';
import {CategoryService} from "./category.service";
import {Category} from "./category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers:[CategoryService]
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private categoriesService: CategoryService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(data => this.categories = data);
  }

}
