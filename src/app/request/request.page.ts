import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestPageForm } from './request.page.form';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  public slug: string;
  form: FormGroup;
  recipe: { id: number; slug: string };

  constructor(private route: ActivatedRoute, private recipesService: RecipesService, private formBuilder: FormBuilder,
    public alertController: AlertController, private router: Router) { }

    async submit() {
      const alert = await this.alertController.create({
        header: 'Pedido confirmado!',
        message: 'Daqui a pouco chega :)',
        buttons: [{text: 'OK', handler: () => this.router.navigate(['receitas'])}]
      });

      await alert.present();

    }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.recipe = this.recipesService.getRecipeBySlug(this.slug);
    this.form = new RequestPageForm(this.formBuilder).createForm();
  }

}
