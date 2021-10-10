import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes = [{
      id: 1,
      title: 'Biscoito de aveia zero',
      slug: 'biscoito-de-aveia-zero',
      price: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://amp.receitadevovo.com.br/wp-content/uploads/2021/01/Biacoito-de-aveia-zero-1280x720.jpg'
    },
    {
      id: 2,
      title: 'Risoto',
      slug: 'risoto',
      price: 15,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://amp.receitadevovo.com.br/wp-content/uploads/2021/01/Risoto-1280x720.jpg'
    },
    {
      id: 3,
      title: 'Salada Caesar',
      slug: 'salada-caesar',
      price: 8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://amp.receitadevovo.com.br/wp-content/uploads/2021/01/Salada-Caesar-1280x720.jpg'
    },
    {
      id: 4,
      title: 'Salada de batata para churrasco',
      slug: 'salada-de-batata-para-churrasco',
      price: 17,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://amp.receitadevovo.com.br/wp-content/uploads/2021/01/Salada-de-batata-para-churrasco-1280x720.jpg'
    },
    {
      id: 5,
      title: 'Salada de repolho com maionese',
      slug: 'salada-de-repolho-com-maionese',
      price: 14,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://amp.receitadevovo.com.br/wp-content/uploads/2021/01/Salada-de-repolho-com-maionese-1280x720.jpg'
    },
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipeBySlug(slug: string) {
    return this.recipes.find(recipe => recipe.slug === slug);
  }
}
