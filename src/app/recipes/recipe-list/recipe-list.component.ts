import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe'
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pho', 'Savory','https://static1.squarespace.com/static/54e6547ee4b0e3df8c056fbb/54f101cae4b0724ec2030a47/54f10da3e4b013baf3ff24be/1425083821250/pho_beef_5.jpg',[]),
    new Recipe('Bun Bo Hue', 'Spicy Citrus','https://i.ytimg.com/vi/8SCJKsirP0A/maxresdefault.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
