import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This is a test1', 'https://p0.pxfuel.com/preview/443/49/230/recipe-bread-breakfast-proper-nutrition.jpg'),
    new Recipe('A test Recipe 2', 'This is a test2', 'https://p0.pxfuel.com/preview/443/49/230/recipe-bread-breakfast-proper-nutrition.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
