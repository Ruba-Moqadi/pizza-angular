import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-recipes',
  templateUrl: './pizza-recipes.component.html',
  styleUrls: ['./pizza-recipes.component.css']
})
export class PizzaRecipesComponent implements OnInit {
  display="d-none"
   show(){
this.display="d-block"
   }
  constructor() { }

  ngOnInit(): void {
  }

}
