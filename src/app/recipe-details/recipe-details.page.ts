import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';

interface IRecipe {
  id: number;
  slug: string;
}

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})


export class RecipesDetailsPage implements OnInit {

  public slug: string;
  recipe: IRecipe;

  constructor(private route: ActivatedRoute, private router: Router, private recipesService: RecipesService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.recipe = this.recipesService.getRecipeBySlug(this.slug);
  }

  onClick() {
    this.router.navigate([`request/${this.slug}`]);
  }

}
