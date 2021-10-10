import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'receitas',
    pathMatch: 'full'
  },
  {
    path: 'receitas',
    loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'receitas/:slug',
    loadChildren: () => import('./recipe-details/recipe-details.module').then( m => m.RecipesDetailsPageModule)
  },
  {
    path: 'request/:slug',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
