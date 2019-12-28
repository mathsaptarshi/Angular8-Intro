import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Steak","Using this recipe you can prepare a delicious steak in less than half an hour of cook time and prep time","https://kirkmarket.ky/wp-content/uploads/2016/10/Grilled-sliced-beef-steak.jpg"),
    new Recipe("Rib Eye","The rib eye or ribeye is a beef steak from the rib section. The rib section of beef spans from ribs six through twelve. Ribeye steaks are mostly composed of the longissimus dorsi muscle but also contain the complexus and spinalis muscles.","https://www.jessicagavin.com/wp-content/uploads/2018/06/ribeye-steak-with-red-wine-sauce-social.jpg")
  ];
  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }

}
