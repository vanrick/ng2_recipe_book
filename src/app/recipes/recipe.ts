import { Ingredient } from "../../shared/ingredient"
export class Recipe { //the model is the blue print on what the recipe should look like.
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]) {}
}
