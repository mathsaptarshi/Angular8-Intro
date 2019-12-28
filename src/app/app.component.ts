import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  optionLoaded = "recipes";
  
  onNevigation(option: string){
    this.optionLoaded = option;
  }
}
