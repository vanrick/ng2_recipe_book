import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component'
import { Ingredient } from '../../shared/ingredient'

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Bacon", 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
